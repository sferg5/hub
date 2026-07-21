import React, { useState, useEffect, useMemo, useRef } from "react";
import { Plus, Clock, AlertCircle, CheckCircle2, Edit2, Trash2, X, Tag, User, Users, LayoutGrid, Columns3, GanttChartSquare, RotateCcw, AlertTriangle, ArrowLeft, CalendarDays, Sparkles, ChevronDown, ChevronUp, ArrowUpDown, Zap, Archive, BarChart3, Briefcase, Activity, TrendingUp, Award, Timer, Link as LinkIcon, ExternalLink, StickyNote, ChevronLeft, ChevronRight, Search, Check, ArrowRight, Layers, Boxes, Star, Target, Circle, Video, Send, Download, FileText, Inbox, ListChecks } from "lucide-react";

const STATUSES = [
  { id: "backlog", label: "Backlog", color: "bg-sky-500/20 text-sky-300 border-sky-500/30", dot: "bg-sky-400", bar: "bg-sky-500" },
  { id: "discovery", label: "Discovery", color: "bg-slate-500/20 text-slate-300 border-slate-500/30", dot: "bg-slate-400", bar: "bg-slate-500" },
  { id: "wip", label: "Work in Progress", color: "bg-violet-500/20 text-violet-300 border-violet-500/30", dot: "bg-violet-400", bar: "bg-violet-500" },
  { id: "review", label: "In Review", color: "bg-amber-500/20 text-amber-300 border-amber-500/30", dot: "bg-amber-400", bar: "bg-amber-500" },
  { id: "revisions", label: "Revisions", color: "bg-orange-500/20 text-orange-300 border-orange-500/30", dot: "bg-orange-400", bar: "bg-orange-500" },
  { id: "delivered", label: "Delivered", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", dot: "bg-emerald-400", bar: "bg-emerald-500" },
  { id: "onhold", label: "On Hold", color: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30", dot: "bg-zinc-500", bar: "bg-zinc-600" },
];

const STATUS_MIGRATION = { briefing: "discovery", animating: "wip" };

const PRIORITIES = [
  { id: "low", label: "Low", color: "text-zinc-400" },
  { id: "medium", label: "Medium", color: "text-amber-400" },
  { id: "high", label: "High", color: "text-rose-400" },
];

const PROJECT_TYPES = [
  "Brand Team Enablement",
  "UX Delivery Team Enablement",
  "UX Design Team Enablement",
  "Signature Moment",
  "Strategic Moment",
  "Motion System",
  "Office Hours",
  "Community of Practice"
];

const VIEWS = [
  { id: "kanban", label: "Kanban", icon: Columns3 },
  { id: "cards", label: "Cards", icon: LayoutGrid },
  { id: "timeline", label: "Timeline", icon: GanttChartSquare },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
];

const STORAGE_KEY = "motion-tracker:projects";
const TRASH_KEY = "motion-tracker:trash";
const COMPLETED_KEY = "motion-tracker:completed";
const VIEW_KEY = "motion-tracker:view";
const ORDER_MODE_KEY = "motion-tracker:orderMode";
const LINKS_KEY = "motion-tracker:links";
const REQUESTS_KEY = "motion-tracker:requests";

const DAY_CAPACITY = 7;
const RITUAL_HOURS = 1;

function fmtDate(d) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function fmtDayString(s) {
  if (!s) return "";
  return new Date(s + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function sumHours(entries) {
  return (entries || []).reduce((s, e) => s + (Number(e.hours) || 0), 0);
}

function hrefFor(url) {
  const u = (url || "").trim();
  if (!u) return "#";
  if (/^https?:\/\//i.test(u) || u.startsWith("mailto:")) return u;
  return `https://${u}`;
}

function formatStakeholder(s) {
  if (!s) return "";
  const t = (s.team || "").trim();
  const n = (s.name || "").trim();
  return [t, n].filter(Boolean).join(" · ");
}

function formatStakeholdersCompact(stakeholders) {
  if (!stakeholders || stakeholders.length === 0) return "";
  const first = formatStakeholder(stakeholders[0]);
  if (stakeholders.length === 1) return first;
  return `${first} +${stakeholders.length - 1}`;
}

function migrateProject(p, idx) {
  const { client, team, contact, ...rest } = p;
  let stakeholders = p.stakeholders;
  if (!Array.isArray(stakeholders)) {
    const t = (team || client || "").trim();
    const n = (contact || "").trim();
    stakeholders = (t || n) ? [{ team: t, name: n }] : [];
  } else {
    stakeholders = stakeholders.map(s => ({
      team: (s?.team || "").trim(),
      name: (s?.name || "").trim(),
    }));
  }
  let estimatedHours = null;
  if (typeof p.estimatedHours === "number") estimatedHours = p.estimatedHours;
  else if (p.estimatedHours !== undefined && p.estimatedHours !== null && p.estimatedHours !== "") {
    const n = Number(p.estimatedHours);
    if (!isNaN(n)) estimatedHours = n;
  }
  const timeEntries = Array.isArray(p.timeEntries)
    ? p.timeEntries.map((e, i) => ({
        id: e.id || `${p.id || idx}-${i}`,
        hours: Number(e.hours) || 0,
        date: e.date || "",
      }))
    : [];
  return {
    ...rest,
    stakeholders,
    estimatedHours,
    timeEntries,
    status: STATUS_MIGRATION[p.status] || p.status,
    startDate: p.startDate || "",
    order: p.order ?? idx,
  };
}

function getMondayOfWeek(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function urgencyScore(p, today) {
  let score = 0;
  if (p.deadline) {
    const deadline = new Date(p.deadline + "T00:00:00");
    const days = (deadline - today) / (1000 * 60 * 60 * 24);
    if (days < 0) score += 1000 + Math.abs(days) * 5;
    else if (days < 14) score += (14 - days) * 30;
  }
  if (p.priority === "high") score += 200;
  else if (p.priority === "medium") score += 50;
  if (p.status === "wip" || p.status === "revisions") score += 100;
  else if (p.status === "review") score += 60;
  else if (p.status === "discovery") score += 30;
  return score;
}

function deliveryVerdict(p) {
  if (!p.deliveredAt || !p.deadline) return null;
  const deadline = new Date(p.deadline + "T00:00:00");
  const delivered = new Date(p.deliveredAt);
  delivered.setHours(0, 0, 0, 0);
  const diff = Math.round((delivered - deadline) / (1000 * 60 * 60 * 24));
  if (diff < 0) return "early";
  if (diff === 0) return "ontime";
  return "late";
}

function deliveryLabel(p) {
  if (p.status !== "delivered") return null;
  if (!p.deliveredAt || !p.deadline) {
    return { label: "Delivered", pillClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" };
  }
  const verdict = deliveryVerdict(p);
  if (verdict === "early") return { label: "Early", pillClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" };
  if (verdict === "ontime") return { label: "On Time", pillClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" };
  return { label: "Late", pillClass: "bg-rose-500/20 text-rose-300 border-rose-500/30" };
}

function nextOrderInColumn(projects, status, excludeId) {
  const cols = projects.filter(p => p.status === status && p.id !== excludeId);
  if (cols.length === 0) return 0;
  return Math.max(...cols.map(p => p.order ?? 0)) + 1;
}

export default function MotionTracker() {
  const [projects, setProjects] = useState([]);
  const [trash, setTrash] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [links, setLinks] = useState([]);
  const [requests, setRequests] = useState([]);
  const [showIntake, setShowIntake] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("kanban");
  const [showTrash, setShowTrash] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const [orderMode, setOrderMode] = useState("custom");
  const [trackerCollapsed, setTrackerCollapsed] = useState(false);
  const [search, setSearch] = useState("");
  const [searchSort, setSearchSort] = useState("project");
  const [form, setForm] = useState(emptyForm());

  function emptyForm() {
    return {
      name: "",
      stakeholders: [{ team: "", name: "" }],
      type: "Brand Team Enablement",
      status: "backlog", priority: "medium",
      estimatedHours: "",
      startDate: "", deadline: "", deliveredAt: "", notes: "",
    };
  }

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get(STORAGE_KEY);
        if (r && r.value) {
          const loaded = JSON.parse(r.value);
          setProjects(loaded.map((p, idx) => migrateProject(p, idx)));
        }
      } catch (e) {}
      try {
        const t = await window.storage.get(TRASH_KEY);
        if (t && t.value) {
          const loaded = JSON.parse(t.value);
          setTrash(loaded.map((p, idx) => migrateProject(p, idx)));
        }
      } catch (e) {}
      try {
        const c = await window.storage.get(COMPLETED_KEY);
        if (c && c.value) {
          const loaded = JSON.parse(c.value);
          setCompleted(loaded.map((p, idx) => migrateProject(p, idx)));
        }
      } catch (e) {}
      try {
        const lk = await window.storage.get(LINKS_KEY);
        if (lk && lk.value) {
          const loaded = JSON.parse(lk.value);
          if (Array.isArray(loaded)) setLinks(loaded);
        }
      } catch (e) {}
      try {
        const rq = await window.storage.get(REQUESTS_KEY);
        if (rq && rq.value) {
          const loaded = JSON.parse(rq.value);
          if (Array.isArray(loaded)) setRequests(loaded);
        }
      } catch (e) {}
      try {
        const v = await window.storage.get(VIEW_KEY);
        if (v && v.value) setView(v.value);
      } catch (e) {}
      try {
        const om = await window.storage.get(ORDER_MODE_KEY);
        if (om && om.value) setOrderMode(om.value);
      } catch (e) {}
      setLoading(false);
    })();
  }, []);

  async function save(next) {
    setProjects(next);
    try { await window.storage.set(STORAGE_KEY, JSON.stringify(next)); }
    catch (e) { console.error("Save failed", e); }
  }

  async function saveTrash(next) {
    setTrash(next);
    try { await window.storage.set(TRASH_KEY, JSON.stringify(next)); }
    catch (e) { console.error("Trash save failed", e); }
  }

  async function saveCompleted(next) {
    setCompleted(next);
    try { await window.storage.set(COMPLETED_KEY, JSON.stringify(next)); }
    catch (e) { console.error("Completed save failed", e); }
  }

  async function saveLinks(next) {
    setLinks(next);
    try { await window.storage.set(LINKS_KEY, JSON.stringify(next)); }
    catch (e) { console.error("Links save failed", e); }
  }

  // When a note is filed against a project, mirror its text into that project's notes field.
  function appendProjectNote(projectId, text) {
    const body = (text || "").trim();
    if (!projectId || !body) return;
    save(projects.map(p => {
      if (p.id !== projectId) return p;
      const existing = (p.notes || "").trim();
      return { ...p, notes: existing ? `${existing}\n${body}` : body };
    }));
  }

  async function saveRequests(next) {
    setRequests(next);
    try { await window.storage.set(REQUESTS_KEY, JSON.stringify(next)); }
    catch (e) { console.error("Requests save failed", e); }
  }

  // Called by the intake modal on submit: log the request and drop a Backlog project in the tracker.
  function submitRequest(record) {
    saveRequests([record, ...requests]);
    const pd = record.project || {};
    const newP = {
      id: Date.now().toString(),
      createdAt: Date.now(),
      order: -Date.now(),
      timeEntries: [],
      status: "backlog",
      name: pd.name || "Untitled request",
      stakeholders: pd.stakeholders || [],
      type: pd.type || "UX Delivery Team Enablement",
      priority: pd.priority || "medium",
      estimatedHours: null,
      startDate: "",
      deadline: pd.deadline || "",
      deliveredAt: null,
      notes: pd.notes || "",
      requestId: record.id,
    };
    save([newP, ...projects]);
  }

  function removeRequest(id) {
    saveRequests(requests.filter(r => r.id !== id));
  }
  const requestHandlers = { removeRequest };

  async function changeView(v) {
    setView(v);
    try { await window.storage.set(VIEW_KEY, v); } catch (e) {}
  }

  async function changeOrderMode(m) {
    setOrderMode(m);
    try { await window.storage.set(ORDER_MODE_KEY, m); } catch (e) {}
  }

  // === Time tracking handlers ===
  function logTime(id, hours, date) {
    const h = Number(hours);
    if (!h || h <= 0) return;
    save(projects.map(p => {
      if (p.id !== id) return p;
      const entry = { id: Date.now().toString(), hours: h, date: date || todayISO() };
      return { ...p, timeEntries: [...(p.timeEntries || []), entry] };
    }));
  }

  function removeTimeEntry(id, entryId) {
    save(projects.map(p =>
      p.id === id ? { ...p, timeEntries: (p.timeEntries || []).filter(e => e.id !== entryId) } : p
    ));
  }

  function setEstimatedHours(id, hours) {
    const n = (hours === "" || hours === null || hours === undefined) ? null : Number(hours);
    const value = (n === null || isNaN(n)) ? null : n;
    save(projects.map(p => p.id === id ? { ...p, estimatedHours: value } : p));
  }

  const timeHandlers = { logTime, removeTimeEntry, setEstimatedHours };

  // === Link handlers ===
  function addLink({ url, label, projectId }) {
    const u = (url || "").trim();
    if (!u) return;
    const link = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
      url: u,
      label: (label || "").trim(),
      projectId: projectId || "",
      createdAt: Date.now(),
    };
    saveLinks([link, ...links]);
  }
  function updateLink(id, patch) {
    saveLinks(links.map(l => l.id === id ? { ...l, ...patch } : l));
  }
  function removeLink(id) {
    saveLinks(links.filter(l => l.id !== id));
  }
  const linkHandlers = { addLink, updateLink, removeLink };

  const stakeholderDB = useMemo(() => {
    const teamSet = new Set();
    const contactSet = new Set();
    [...projects, ...completed, ...trash].forEach(p => {
      (p.stakeholders || []).forEach(s => {
        if (s?.team?.trim()) teamSet.add(s.team.trim());
        if (s?.name?.trim()) contactSet.add(s.name.trim());
      });
    });
    return {
      teams: Array.from(teamSet).sort((a, b) => a.localeCompare(b)),
      contacts: Array.from(contactSet).sort((a, b) => a.localeCompare(b)),
    };
  }, [projects, completed, trash]);

  function openNew() {
    setForm(emptyForm());
    setEditingId(null);
    setShowForm(true);
  }

  function openEdit(p) {
    let deliveredAtStr = "";
    if (p.deliveredAt) {
      const d = new Date(p.deliveredAt);
      deliveredAtStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    }
    const stakeholders = (p.stakeholders && p.stakeholders.length > 0)
      ? p.stakeholders.map(s => ({ team: s.team || "", name: s.name || "" }))
      : [{ team: "", name: "" }];
    setForm({
      name: p.name || "",
      stakeholders,
      type: p.type || "Brand Team Enablement",
      status: p.status || "backlog",
      priority: p.priority || "medium",
      estimatedHours: (typeof p.estimatedHours === "number") ? String(p.estimatedHours) : "",
      startDate: p.startDate || "",
      deadline: p.deadline || "",
      deliveredAt: deliveredAtStr,
      notes: p.notes || "",
    });
    setEditingId(p.id);
    setShowForm(true);
  }

  function applyDeliveryStamp(prev, nextStatus) {
    if (nextStatus === "delivered" && !prev.deliveredAt) return { deliveredAt: Date.now() };
    if (nextStatus !== "delivered" && prev.deliveredAt) return { deliveredAt: null };
    return {};
  }

  function submit() {
    if (!form.name.trim()) return;

    const cleanedStakeholders = (form.stakeholders || [])
      .map(s => ({ team: (s.team || "").trim(), name: (s.name || "").trim() }))
      .filter(s => s.team || s.name);

    const estNum = (form.estimatedHours === "" || form.estimatedHours === null || form.estimatedHours === undefined)
      ? null : Number(form.estimatedHours);
    const estimatedHours = (estNum === null || isNaN(estNum)) ? null : estNum;

    const formClean = { ...form, stakeholders: cleanedStakeholders, estimatedHours };

    const manualDeliveredAt = form.deliveredAt
      ? new Date(form.deliveredAt + "T12:00:00").getTime()
      : null;

    const computeDeliveredAt = (prevDeliveredAt, prevStatus) => {
      if (form.status !== "delivered") return null;
      if (manualDeliveredAt) return manualDeliveredAt;
      if (prevStatus !== "delivered") return Date.now();
      return null;
    };

    if (editingId) {
      save(projects.map(p => {
        if (p.id !== editingId) return p;
        const statusChanged = p.status !== form.status;
        const newOrder = statusChanged ? nextOrderInColumn(projects, form.status, editingId) : p.order;
        return {
          ...p,
          ...formClean,
          order: newOrder,
          deliveredAt: computeDeliveredAt(p.deliveredAt, p.status),
        };
      }));
    } else {
      const newP = {
        id: Date.now().toString(),
        createdAt: Date.now(),
        order: -Date.now(),
        timeEntries: [],
        ...formClean,
        deliveredAt: computeDeliveredAt(null, null),
      };
      save([newP, ...projects]);
    }
    setShowForm(false);
  }

  function moveToTrash(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    save(projects.filter(p => p.id !== id));
    saveTrash([{ ...project, deletedAt: Date.now() }, ...trash]);
  }

  function restoreFromTrash(id) {
    const project = trash.find(p => p.id === id);
    if (!project) return;
    const { deletedAt, ...restored } = project;
    const newOrder = nextOrderInColumn(projects, restored.status, null);
    saveTrash(trash.filter(p => p.id !== id));
    save([{ ...restored, order: newOrder }, ...projects]);
  }

  function clearTrash() {
    saveTrash([]);
    setShowConfirmClear(false);
  }

  function moveToCompleted(id) {
    const project = projects.find(p => p.id === id);
    if (!project || project.status !== "delivered") return;
    save(projects.filter(p => p.id !== id));
    saveCompleted([{ ...project, completedAt: Date.now() }, ...completed]);
  }

  function restoreFromCompleted(id) {
    const project = completed.find(p => p.id === id);
    if (!project) return;
    const { completedAt, ...restored } = project;
    const newOrder = nextOrderInColumn(projects, "delivered", null);
    saveCompleted(completed.filter(p => p.id !== id));
    save([{ ...restored, status: "delivered", order: newOrder }, ...projects]);
  }

  function setStatus(id, status) {
    save(projects.map(p => {
      if (p.id !== id) return p;
      if (p.status === status) return p;
      const newOrder = nextOrderInColumn(projects, status, id);
      return { ...p, status, order: newOrder, ...applyDeliveryStamp(p, status) };
    }));
  }

  function reorderCard(fromId, targetStatus, targetCardId, position) {
    const source = projects.find(p => p.id === fromId);
    if (!source) return;

    const updatedSource = {
      ...source,
      status: targetStatus,
      ...applyDeliveryStamp(source, targetStatus),
    };

    const colProjects = projects.filter(p => p.status === targetStatus && p.id !== fromId);
    const sorted = [...colProjects].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    let insertIndex;
    if (!targetCardId) {
      insertIndex = sorted.length;
    } else {
      const targetIndex = sorted.findIndex(p => p.id === targetCardId);
      insertIndex = targetIndex === -1 ? sorted.length : (position === "above" ? targetIndex : targetIndex + 1);
    }

    sorted.splice(insertIndex, 0, updatedSource);
    const orderMap = {};
    sorted.forEach((p, idx) => { orderMap[p.id] = idx; });

    save(projects.map(p => {
      if (p.id === fromId) return { ...updatedSource, order: orderMap[fromId] };
      if (orderMap[p.id] !== undefined) return { ...p, order: orderMap[p.id] };
      return p;
    }));
  }

  function daysUntil(date) {
    if (!date) return null;
    return Math.ceil((new Date(date) - new Date()) / (1000 * 60 * 60 * 24));
  }

  function deadlineLabel(date) {
    const d = daysUntil(date);
    if (d === null) return null;
    if (d < 0) return { text: `${Math.abs(d)}d overdue`, color: "text-rose-400" };
    if (d === 0) return { text: "Due today", color: "text-rose-400" };
    if (d === 1) return { text: "Due tomorrow", color: "text-amber-400" };
    if (d <= 7) return { text: `${d}d left`, color: "text-amber-400" };
    return { text: `${d}d left`, color: "text-zinc-400" };
  }

  const counts = STATUSES.reduce((acc, s) => {
    acc[s.id] = projects.filter(p => p.status === s.id).length;
    return acc;
  }, {});

  const searchActive = search.trim() !== "";
  const showingMainTracker = !showTrash && !showCompleted && !searchActive;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-6">
      <div className="w-full">
        <header className="mb-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h1 className="text-2xl font-bold tracking-tight">Motion Specialist Dashboard</h1>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search projects…"
                  className="w-44 sm:w-56 pl-8 pr-7 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-green-500"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200 transition"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              {showingMainTracker && (
                <>
                  <button
                    onClick={() => setShowCompleted(true)}
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 flex items-center gap-2 transition"
                  >
                    <Award className="w-4 h-4" />
                    Completed
                    {completed.length > 0 && (
                      <span className="ml-1 px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-semibold min-w-[20px] text-center">
                        {completed.length}
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => setShowTrash(true)}
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 flex items-center gap-2 transition relative"
                  >
                    <Trash2 className="w-4 h-4" />
                    Trash
                    {trash.length > 0 && (
                      <span className="ml-1 px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-xs font-semibold min-w-[20px] text-center">
                        {trash.length}
                      </span>
                    )}
                  </button>
                  <button
                    onClick={openNew}
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 flex items-center gap-2 transition"
                  >
                    <Plus className="w-4 h-4" />
                    New Project
                  </button>
                  <button
                    onClick={() => setShowIntake(true)}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-green-500 hover:bg-green-400 text-white flex items-center gap-2 transition"
                  >
                    <Inbox className="w-4 h-4" />
                    Intake Form
                  </button>
                </>
              )}
            </div>
          </div>
        </header>

        {searchActive && (
          <SearchView
            projects={projects}
            completed={completed}
            query={search}
            sort={searchSort}
            onChangeSort={setSearchSort}
            onEdit={openEdit}
          />
        )}

        {showingMainTracker && !loading && <DailyBriefing projects={projects} />}

        {showTrash && !searchActive && (
          <TrashView
            trash={trash}
            onRestore={restoreFromTrash}
            onClearAll={() => setShowConfirmClear(true)}
            onBack={() => setShowTrash(false)}
          />
        )}

        {showCompleted && !searchActive && (
          <CompletedView
            completed={completed}
            onRestore={restoreFromCompleted}
            onBack={() => setShowCompleted(false)}
          />
        )}

        {showingMainTracker && (
          <>
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-xl mb-6 overflow-hidden">
              <button
                onClick={() => setTrackerCollapsed(!trackerCollapsed)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-900/40 transition text-left"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">Project Tracker</div>
                    <div className="text-xs text-zinc-400 truncate">
                      {projects.length} project{projects.length === 1 ? "" : "s"} in tracker
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 flex-shrink-0 ml-2">
                  {trackerCollapsed ? "Show" : "Hide"}
                  {trackerCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </div>
              </button>

              {!trackerCollapsed && (
                <div className="px-4 pb-4 border-t border-zinc-800/50 pt-4">
                  <div className="flex items-center gap-2 mb-6 flex-wrap">
                    <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg p-1 w-fit">
                      {VIEWS.map(v => {
                        const Icon = v.icon;
                        return (
                          <button
                            key={v.id}
                            onClick={() => changeView(v.id)}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition flex items-center gap-2 ${
                              view === v.id ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-zinc-100"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            {v.label}
                          </button>
                        );
                      })}
                    </div>
                    {view === "kanban" && (
                      <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg p-1 w-fit">
                        <button
                          onClick={() => changeOrderMode("custom")}
                          className={`px-3 py-1.5 rounded-md text-sm font-medium transition flex items-center gap-2 ${
                            orderMode === "custom" ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-zinc-100"
                          }`}
                          title="Drag cards to reorder within a column"
                        >
                          <ArrowUpDown className="w-4 h-4" />
                          Custom
                        </button>
                        <button
                          onClick={() => changeOrderMode("urgency")}
                          className={`px-3 py-1.5 rounded-md text-sm font-medium transition flex items-center gap-2 ${
                            orderMode === "urgency" ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-zinc-100"
                          }`}
                          title="Auto-sort cards by urgency (deadline + priority + status)"
                        >
                          <Zap className="w-4 h-4" />
                          By Urgency
                        </button>
                      </div>
                    )}
                  </div>

                  {loading ? (
                    <div className="text-center py-16 text-zinc-500">Loading projects...</div>
                  ) : projects.length === 0 ? (
                    <EmptyState onAdd={openNew} />
                  ) : view === "cards" ? (
                    <CardsView
                      projects={projects}
                      filter={filter}
                      setFilter={setFilter}
                      counts={counts}
                      onEdit={openEdit}
                      onRemove={moveToTrash}
                      onSetStatus={setStatus}
                      onComplete={moveToCompleted}
                      deadlineLabel={deadlineLabel}
                      timeHandlers={timeHandlers}
                      links={links}
                      linkHandlers={linkHandlers}
                    />
                  ) : view === "kanban" ? (
                    <KanbanView
                      projects={projects}
                      onEdit={openEdit}
                      onRemove={moveToTrash}
                      onSetStatus={setStatus}
                      onReorder={reorderCard}
                      onComplete={moveToCompleted}
                      orderMode={orderMode}
                      onChangeOrderMode={changeOrderMode}
                      deadlineLabel={deadlineLabel}
                      timeHandlers={timeHandlers}
                      links={links}
                      linkHandlers={linkHandlers}
                    />
                  ) : view === "calendar" ? (
                    <CalendarView
                      projects={projects}
                      onEdit={openEdit}
                    />
                  ) : (
                    <TimelineView
                      projects={projects}
                      onEdit={openEdit}
                      daysUntil={daysUntil}
                    />
                  )}
                </div>
              )}
            </div>

            {!loading && (
              <TimeLog projects={projects} completed={completed} timeHandlers={timeHandlers} />
            )}

            {!loading && (
              <DailyChecklist />
            )}

            {!loading && (
              <LinkManager links={links} linkHandlers={linkHandlers} projects={projects} completed={completed} />
            )}

            {!loading && (
              <NotesSection projects={projects} completed={completed} onNoteToProject={appendProjectNote} />
            )}

            {!loading && (
              <StatsSection projects={projects} completed={completed} />
            )}
          </>
        )}

        {showForm && (
          <FormModal
            form={form}
            setForm={setForm}
            editingId={editingId}
            onClose={() => setShowForm(false)}
            onSubmit={submit}
            stakeholderDB={stakeholderDB}
          />
        )}

        {showIntake && (
          <IntakeModal
            onClose={() => setShowIntake(false)}
            onSubmitRequest={submitRequest}
          />
        )}

        {showConfirmClear && (
          <ConfirmModal
            title="Clear all trash?"
            message={`This will permanently delete ${trash.length} project${trash.length === 1 ? "" : "s"}. This action cannot be undone.`}
            confirmLabel="Clear Trash"
            onConfirm={clearTrash}
            onCancel={() => setShowConfirmClear(false)}
            danger
          />
        )}
      </div>
    </div>
  );
}

function SearchView({ projects, completed, query, sort, onChangeSort, onEdit }) {
  const q = query.trim().toLowerCase();
  const pool = [...projects, ...completed];

  const SORTS = [
    { id: "project", label: "Project" },
    { id: "stakeholder", label: "Stakeholder" },
    { id: "delivered", label: "Delivered date" },
    { id: "notes", label: "Notes" },
  ];

  const firstStakeholder = (p) => {
    const s = (p.stakeholders || [])[0];
    return s ? formatStakeholder(s) : "";
  };

  const matches = pool.filter(p => {
    const hay = [p.name || ""];
    (p.stakeholders || []).forEach(s => { hay.push(s.team || ""); hay.push(s.name || ""); });
    hay.push(p.notes || "");
    if (p.deliveredAt) {
      const d = new Date(p.deliveredAt);
      hay.push(d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }));
      hay.push(d.toLocaleDateString("en-US"));
    }
    return hay.join(" \u0001 ").toLowerCase().includes(q);
  });

  const sorted = [...matches].sort((a, b) => {
    if (sort === "stakeholder") return firstStakeholder(a).localeCompare(firstStakeholder(b));
    if (sort === "delivered") return (b.deliveredAt || 0) - (a.deliveredAt || 0);
    if (sort === "notes") return (a.notes || "").localeCompare(b.notes || "");
    return (a.name || "").localeCompare(b.name || "");
  });

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
        <h2 className="text-sm text-zinc-400 flex items-center gap-2">
          <Search className="w-4 h-4 text-green-400" />
          {sorted.length} result{sorted.length === 1 ? "" : "s"} for &ldquo;<span className="text-zinc-200">{query.trim()}</span>&rdquo;
        </h2>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-zinc-500">Sort by</span>
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg p-1 w-fit">
            {SORTS.map(s => (
              <button
                key={s.id}
                onClick={() => onChangeSort(s.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  sort === s.id ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-zinc-800 rounded-xl">
          <Search className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
          <h3 className="text-lg font-medium mb-1">No matches</h3>
          <p className="text-sm text-zinc-500">Nothing matched across project names, stakeholders, delivered dates, or notes.</p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {sorted.map(p => <SearchResultCard key={p.id} project={p} onEdit={onEdit} />)}
        </div>
      )}
    </div>
  );
}

function SearchResultCard({ project: p, onEdit }) {
  const editable = !p.completedAt;
  const status = STATUSES.find(s => s.id === p.status);
  const stakeholderSummary = formatStakeholdersCompact(p.stakeholders);

  return (
    <div
      onClick={editable ? () => onEdit(p) : undefined}
      className={`bg-zinc-900 border border-zinc-800 rounded-xl p-4 transition ${editable ? "hover:border-zinc-700 cursor-pointer" : ""}`}
    >
      <div className="mb-2">
        <h3 className="font-semibold break-words leading-snug">{p.name}</h3>
        {stakeholderSummary && (
          <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
            <Users className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{stakeholderSummary}</span>
          </p>
        )}
      </div>
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        {status && <span className={`text-xs px-2 py-0.5 rounded-md border ${status.color}`}>{status.label}</span>}
        <span className="text-xs text-zinc-500 flex items-center gap-1">
          <Tag className="w-3 h-3" />
          {p.type}
        </span>
        {p.completedAt && (
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold uppercase tracking-wider">Completed</span>
        )}
      </div>
      {p.deliveredAt && (
        <div className="text-xs text-zinc-500 flex items-center gap-1 mb-2">
          <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
          Delivered {fmtDate(p.deliveredAt)}
        </div>
      )}
      {p.notes && <p className="text-sm text-zinc-400 line-clamp-3">{p.notes}</p>}
    </div>
  );
}

function EmptyState({ onAdd }) {
  return (
    <div className="text-center py-16 border-2 border-dashed border-zinc-800 rounded-xl">
      <LayoutGrid className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
      <h3 className="text-lg font-medium mb-1">No projects yet</h3>
      <p className="text-sm text-zinc-500 mb-4">Add your first project to get started</p>
      <button
        onClick={onAdd}
        className="px-4 py-2 rounded-lg text-sm font-medium bg-green-500 hover:bg-green-400 text-white inline-flex items-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Create Project
      </button>
    </div>
  );
}

function DailyBriefing({ projects }) {
  const [collapsed, setCollapsed] = useState(false);
  const [picks, setPicks] = useState({});

  useEffect(() => {
    (async () => {
      const t = new Date(); t.setHours(0, 0, 0, 0);
      const mon = getMondayOfWeek(t);
      const mKey = `${mon.getFullYear()}-${mon.getMonth() + 1}-${mon.getDate()}`;
      try {
        const r = await window.storage.get("motion-tracker:weekPicks");
        if (r && r.value) {
          const parsed = JSON.parse(r.value);
          if (parsed.week === mKey && parsed.picks) {
            const norm = {};
            Object.entries(parsed.picks).forEach(([k, arr]) => {
              norm[k] = (arr || []).map(x => typeof x === "string"
                ? { id: x, hours: 0, kind: "manual" }
                : { id: x.id, hours: Number(x.hours) || 0, kind: x.kind || "manual" });
            });
            setPicks(norm);
            return;
          }
        }
      } catch (e) {}
      // Nothing stored for this week — generate a starting suggestion
      try {
        const plan = buildWeekPlan(projects, t, mon, []);
        const next = {};
        plan.days.forEach((d, idx) => {
          next[idx] = d.allocations.map(a => ({ id: a.project.id, hours: a.hours, kind: a.kind }));
        });
        setPicks(next);
        window.storage.set("motion-tracker:weekPicks", JSON.stringify({ week: mKey, picks: next }));
      } catch (e) {}
    })();
  }, []);

  const now = new Date();
  const tzAbbr = now.toLocaleTimeString("en-US", { timeZoneName: "short" }).split(" ").pop();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, " ");
  const dateStr = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const monday = getMondayOfWeek(today);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);
  const nextSunday = new Date(monday);
  nextSunday.setDate(monday.getDate() + 13);
  nextSunday.setHours(23, 59, 59, 999);

  const overdue = [];
  const dueThisWeek = [];
  const dueNextWeek = [];
  const inMotion = [];

  projects.forEach(p => {
    if (["delivered", "backlog", "onhold"].includes(p.status)) return;
    if (p.deadline) {
      const d = new Date(p.deadline + "T00:00:00");
      if (d < today) overdue.push(p);
      else if (d <= sunday) dueThisWeek.push(p);
      else if (d <= nextSunday) dueNextWeek.push(p);
    }
    if (["wip", "review", "revisions"].includes(p.status)) inMotion.push(p);
  });

  const priorities = [...overdue, ...dueThisWeek]
    .sort((a, b) => urgencyScore(b, today) - urgencyScore(a, today))
    .slice(0, 5);

  const hasContent = overdue.length || dueThisWeek.length || dueNextWeek.length || inMotion.length;

  const highPriorityDueSoon = projects
    .filter(p => p.priority === "high" && !["delivered", "backlog", "onhold"].includes(p.status) && p.deadline)
    .map(p => {
      const dl = new Date(p.deadline + "T00:00:00");
      const days = Math.ceil((dl - today) / (1000 * 60 * 60 * 24));
      return { p, days };
    })
    .filter(x => x.days <= 7)
    .sort((a, b) => a.days - b.days);

  function duePhrase(days) {
    if (days < 0) return `${Math.abs(days)}d overdue`;
    if (days === 0) return "due today";
    if (days === 1) return "due tomorrow";
    return `due in ${days}d`;
  }

  function joinList(arr) {
    if (arr.length === 0) return "";
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
    return `${arr.slice(0, -1).join(", ")}, and ${arr[arr.length - 1]}`;
  }

  const load = overdue.length * 2 + dueThisWeek.length * 1.5 + inMotion.length;
  let weekWord;
  if (load === 0) weekWord = "wide-open";
  else if (load <= 3) weekWord = "light";
  else if (load <= 7) weekWord = "steady";
  else if (load <= 12) weekWord = "busy";
  else weekWord = "heavy";

  let summarySentence;
  if (load === 0) {
    summarySentence = "Your week looks wide open — nothing with a deadline is pressing right now, so it's a good window to get ahead or pull something from the backlog.";
  } else {
    const pieces = [];
    if (dueThisWeek.length) pieces.push(`${dueThisWeek.length} project${dueThisWeek.length === 1 ? "" : "s"} due this week`);
    if (inMotion.length) pieces.push(`${inMotion.length} in motion`);
    if (dueNextWeek.length) pieces.push(`${dueNextWeek.length} due next week`);
    summarySentence = `You've got a ${weekWord} week ahead${pieces.length ? ` — ${joinList(pieces)}` : ""}.`;
    if (overdue.length) {
      summarySentence += ` ${overdue.length} project${overdue.length === 1 ? " is" : "s are"} already overdue, so clear ${overdue.length === 1 ? "it" : "those"} first.`;
    }
    if (highPriorityDueSoon.length) {
      summarySentence += ` ${highPriorityDueSoon.length} high-priority item${highPriorityDueSoon.length === 1 ? " is" : "s are"} coming due — flagged below.`;
    }
  }

  const mondayKey = `${monday.getFullYear()}-${monday.getMonth() + 1}-${monday.getDate()}`;

  function persistWeek(nextPicks) {
    setPicks(nextPicks);
    try { window.storage.set("motion-tracker:weekPicks", JSON.stringify({ week: mondayKey, picks: nextPicks })); } catch (e) {}
  }
  function pickItem(dayIndex, projectId, hours = 0) {
    const existing = picks[dayIndex] || [];
    if (existing.some(x => x.id === projectId)) return;
    persistWeek({ ...picks, [dayIndex]: [...existing, { id: projectId, hours: Number(hours) || 0, kind: "manual" }] });
  }
  function unpickItem(dayIndex, projectId) {
    persistWeek({ ...picks, [dayIndex]: (picks[dayIndex] || []).filter(x => x.id !== projectId) });
  }
  function setPickHours(dayIndex, projectId, hours) {
    const h = (hours === "" || hours === null || hours === undefined) ? 0 : Number(hours);
    persistWeek({ ...picks, [dayIndex]: (picks[dayIndex] || []).map(x => x.id === projectId ? { ...x, hours: isNaN(h) ? 0 : h } : x) });
  }
  function movePick(fromDay, toDay, projectId) {
    if (fromDay === toDay) return;
    const fromArr = picks[fromDay] || [];
    const item = fromArr.find(x => x.id === projectId);
    if (!item) return;
    const toArr = picks[toDay] || [];
    persistWeek({
      ...picks,
      [fromDay]: fromArr.filter(x => x.id !== projectId),
      [toDay]: toArr.some(x => x.id === projectId) ? toArr : [...toArr, item],
    });
  }
  function clearDayPicks(dayIndex) {
    persistWeek({ ...picks, [dayIndex]: [] });
  }
  function clearSchedule() {
    persistWeek({});
  }
  function suggestSchedule() {
    const plan = buildWeekPlan(projects, today, monday, []);
    const next = {};
    plan.days.forEach((d, idx) => {
      next[idx] = d.allocations.map(a => ({ id: a.project.id, hours: a.hours, kind: a.kind }));
    });
    persistWeek(next);
  }

  const byId = {};
  projects.forEach(p => { byId[p.id] = p; });

  const weekDays = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const isPast = d < today && d.toDateString() !== today.toDateString();
    return { date: d, label: d.toLocaleDateString("en-US", { weekday: "short" }), isPast };
  });
  if (weekDays.every(d => d.isPast)) weekDays.forEach(d => { d.isPast = false; });

  const scheduledIds = new Set();
  Object.values(picks).forEach(arr => (arr || []).forEach(x => scheduledIds.add(typeof x === "string" ? x : x.id)));

  const candidatePool = projects.filter(p =>
    !scheduledIds.has(p.id) &&
    !["delivered", "onhold"].includes(p.status) &&
    !["Office Hours", "Community of Practice"].includes(p.type)
  );

  function dayAffinity(p, idx) {
    if (!p.deadline) return 0;
    const dl = new Date(p.deadline + "T00:00:00");
    let target = Math.floor((dl - monday) / (1000 * 60 * 60 * 24));
    if (target < 0) target = 0; else if (target > 4) target = 4;
    return Math.max(0, 80 - Math.abs(target - idx) * 25);
  }

  const dayMeta = weekDays.map(d => ({ label: d.label, disabled: d.isPast }));

  const assignableProjects = projects
    .filter(p => !["delivered", "onhold"].includes(p.status))
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""));

  const weekView = weekDays.map((d, idx) => {
    const items = (picks[idx] || [])
      .map(x => ({ project: byId[x.id], hours: Number(x.hours) || 0, kind: x.kind || "manual" }))
      .filter(x => x.project)
      .map(x => ({ project: x.project, hours: x.hours, kind: x.kind, isPick: true }));
    const capacity = d.isPast ? 0 : DAY_CAPACITY;
    const used = Math.round(items.reduce((s, i) => s + (i.hours || 0), 0) * 10) / 10;
    const over = used > capacity + 0.001;
    const capLeft = Math.max(0, Math.round((capacity - used) * 10) / 10);
    let suggestions = [];
    if (!d.isPast && capLeft > 0 && candidatePool.length > 0) {
      suggestions = [...candidatePool]
        .sort((a, b) => (urgencyScore(b, today) + dayAffinity(b, idx)) - (urgencyScore(a, today) + dayAffinity(a, idx)))
        .slice(0, 3);
    }
    return {
      ...d,
      capacity,
      used,
      over,
      items,
      suggestions,
      capLeft,
      dayMeta,
      assignableProjects,
      onSetPickHours: setPickHours,
      onMovePick: movePick,
    };
  });

  return (
    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-xl mb-6 overflow-hidden">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-900/40 transition text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-green-400" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold">Daily Briefing</div>
            <div className="text-xs text-zinc-400 truncate">
              {dateStr} · {timeStr} {tzAbbr} <span className="text-zinc-600">· {timeZone}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 flex-shrink-0 ml-2">
          {collapsed ? "Show" : "Hide"}
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 space-y-6 border-t border-zinc-800/50">
          <div className="pt-4">
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span className="font-semibold">{greeting}.</span> {summarySentence}
            </p>
          </div>

          {highPriorityDueSoon.length > 0 && (
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-3">
              <h3 className="text-[11px] font-semibold text-rose-300 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3 h-3" /> High-Priority Heads-Up
              </h3>
              <div className="space-y-1.5">
                {highPriorityDueSoon.map(({ p, days }) => (
                  <div key={p.id} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>
                    <span className="truncate flex-1 text-zinc-200">{p.name}</span>
                    <span className="text-xs text-rose-300 font-medium flex-shrink-0">{duePhrase(days)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!hasContent ? (
            <p className="text-sm text-zinc-500 italic">Nothing in motion right now. Add or activate a project to get a tailored briefing.</p>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <StatChip label="Overdue" count={overdue.length} accent="rose" />
                <StatChip label="Due This Week" count={dueThisWeek.length} accent="amber" />
                <StatChip label="Due Next Week" count={dueNextWeek.length} accent="sky" />
                <StatChip label="In Motion" count={inMotion.length} accent="violet" />
              </div>

              {priorities.length > 0 && (
                <div>
                  <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-3 h-3" /> Top Priorities
                  </h3>
                  <div className="space-y-1.5 bg-zinc-950/50 rounded-lg p-2.5 border border-zinc-800/50">
                    {priorities.map(p => <PriorityItem key={p.id} project={p} today={today} />)}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                  <CalendarDays className="w-3 h-3" /> Suggested Week Structure
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {weekView.map((d, idx) => (
                    <DayBlock key={idx} day={d} dayIndex={idx} today={today} onPick={pickItem} onUnpick={unpickItem} onClearDay={clearDayPicks} />
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <button
                    onClick={suggestSchedule}
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-green-500 hover:bg-green-400 text-white flex items-center gap-1.5 transition"
                    title="Auto-plan the week from estimates, deadlines and priority (replaces the current schedule)"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Suggest schedule
                  </button>
                  <button
                    onClick={clearSchedule}
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 flex items-center gap-1.5 transition"
                    title="Empty every day so you can build the week from scratch"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Clear schedule
                  </button>
                </div>
                <p className="text-[11px] text-zinc-600 mt-2 italic">
                  Suggest schedule auto-plans the week from your estimates, deadlines and priority (capped at 7h/day, rituals at 1h) and replaces whatever's there. Every block is then editable — change its hours, move it to another day, or remove it — and you can Add work or pin a spare-capacity suggestion on any day. Clear schedule empties the week.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function buildWeekPlan(projects, today, monday, blockedIdx = []) {
  const blockedSet = new Set(blockedIdx);
  const days = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const isPast = d < today && d.toDateString() !== today.toDateString();
    const blocked = blockedSet.has(i);
    const available = !isPast && !blocked;
    return {
      date: d,
      label: d.toLocaleDateString("en-US", { weekday: "short" }),
      capacity: available ? DAY_CAPACITY : 0,
      capacityLeft: available ? DAY_CAPACITY : 0,
      isPast,
      blocked,
      allocations: [],
    };
  });

  if (days.every(d => d.isPast)) {
    days.forEach(d => {
      d.isPast = false;
      if (!d.blocked) { d.capacity = DAY_CAPACITY; d.capacityLeft = DAY_CAPACITY; }
    });
  }

  let firstEligible = days.findIndex(d => !d.isPast && !d.blocked);
  const noCapacity = firstEligible < 0;
  if (firstEligible < 0) firstEligible = 0;

  projects.forEach(p => {
    if (["delivered", "onhold", "backlog"].includes(p.status)) return;
    let idx = null;
    if (p.type === "Community of Practice") idx = 2;
    else if (p.type === "Office Hours") idx = 4;
    if (idx !== null && !days[idx].isPast && !days[idx].blocked) {
      days[idx].allocations.push({ project: p, hours: RITUAL_HOURS, kind: "ritual" });
      days[idx].capacityLeft -= RITUAL_HOURS;
    }
  });

  const sized = projects
    .filter(p =>
      !["backlog", "delivered", "onhold"].includes(p.status) &&
      !["Office Hours", "Community of Practice"].includes(p.type)
    )
    .map(p => {
      const est = typeof p.estimatedHours === "number" ? p.estimatedHours : null;
      const remaining = est !== null ? Math.max(0, est - sumHours(p.timeEntries)) : null;
      return { p, remaining };
    })
    .filter(x => x.remaining !== null && x.remaining > 0)
    .sort((a, b) => urgencyScore(b.p, today) - urgencyScore(a.p, today));

  const allocatedIds = new Set();

  if (!noCapacity) {
    sized.forEach(({ p, remaining }) => {
      let endIdx = 4;
      if (p.deadline) {
        const dl = new Date(p.deadline + "T00:00:00");
        const offset = Math.floor((dl - monday) / (1000 * 60 * 60 * 24));
        endIdx = offset < firstEligible ? firstEligible : Math.min(4, offset);
      }
      const windowDays = [];
      for (let i = firstEligible; i <= endIdx; i++) {
        if (days[i] && !days[i].isPast && !days[i].blocked) windowDays.push(days[i]);
      }
      if (windowDays.length === 0) windowDays.push(days[firstEligible]);

      let hoursLeft = remaining;
      const step = 0.5;
      let guard = 0;
      while (hoursLeft > 0.001 && guard < 2000) {
        guard++;
        let target = null;
        windowDays.forEach(d => {
          if (d.capacityLeft > 0 && (!target || d.capacityLeft > target.capacityLeft)) target = d;
        });
        if (!target) target = windowDays[windowDays.length - 1];
        const give = Math.min(step, hoursLeft);
        const existing = target.allocations.find(a => a.kind === "work" && a.project.id === p.id);
        if (existing) existing.hours += give;
        else target.allocations.push({ project: p, hours: give, kind: "work" });
        target.capacityLeft -= give;
        hoursLeft -= give;
      }
      allocatedIds.add(p.id);
    });
  }

  days.forEach(d => {
    d.allocations.forEach(a => { a.hours = Math.round(a.hours * 10) / 10; });
    d.used = Math.round((d.capacity - d.capacityLeft) * 10) / 10;
    d.over = d.capacityLeft < -0.001;
  });

  return { days, allocatedIds };
}

function StatChip({ label, count, accent }) {
  const colors = {
    rose: "bg-rose-500/10 border-rose-500/30 text-rose-300",
    amber: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    sky: "bg-sky-500/10 border-sky-500/30 text-sky-300",
    violet: "bg-violet-500/10 border-violet-500/30 text-violet-300",
  };
  return (
    <div className={`border rounded-lg px-3 py-2 ${colors[accent]}`}>
      <div className="text-[11px] opacity-80 uppercase tracking-wider">{label}</div>
      <div className="text-2xl font-bold leading-tight">{count}</div>
    </div>
  );
}

function PriorityItem({ project: p, today }) {
  const status = STATUSES.find(s => s.id === p.status);
  let dueText = "";
  let dueColor = "text-zinc-500";
  if (p.deadline) {
    const dl = new Date(p.deadline + "T00:00:00");
    const days = Math.ceil((dl - today) / (1000 * 60 * 60 * 24));
    if (days < 0) { dueText = `${Math.abs(days)}d overdue`; dueColor = "text-rose-400"; }
    else if (days === 0) { dueText = "Due today"; dueColor = "text-rose-400"; }
    else if (days === 1) { dueText = "Due tomorrow"; dueColor = "text-amber-400"; }
    else if (days <= 7) { dueText = `Due ${dl.toLocaleDateString("en-US", { weekday: "short" })} (${days}d)`; dueColor = "text-amber-400"; }
    else { dueText = `${days}d out`; }
  }
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`w-1.5 h-1.5 rounded-full ${status.dot} flex-shrink-0`}></span>
      <span className="truncate flex-1">{p.name}</span>
      {p.priority === "high" && (
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold uppercase tracking-wider flex-shrink-0">High</span>
      )}
      <span className={`text-xs ${dueColor} flex-shrink-0`}>{dueText}</span>
    </div>
  );
}

function DayBlock({ day, dayIndex, today, onPick, onUnpick, onClearDay, onResetDay, onRestoreDay }) {
  const [showAdd, setShowAdd] = useState(false);
  const [addId, setAddId] = useState("");
  const [addHours, setAddHours] = useState("1");

  const isToday = day.date.toDateString() === today.toDateString();
  const isPast = day.isPast;
  const blocked = day.blocked;
  const items = day.items || [];
  const suggestions = day.suggestions || [];
  const dayMeta = day.dayMeta || [];
  const assignableProjects = day.assignableProjects || [];
  const onSetPickHours = day.onSetPickHours;
  const onMovePick = day.onMovePick;
  const hasItems = items.length > 0;
  const hasPicks = items.some(i => i.isPick);
  const hasAllocations = items.some(i => i.kind === "work" || i.kind === "ritual");
  const capacity = day.capacity || 0;
  const used = day.used || 0;
  const over = day.over;
  const pct = capacity > 0 ? Math.min(100, (used / capacity) * 100) : 0;
  const free = Math.max(0, Math.round((capacity - used) * 10) / 10);

  const pinnedIds = new Set(items.filter(i => i.isPick).map(i => i.project.id));
  const addOptions = assignableProjects.filter(p => !pinnedIds.has(p.id));

  function commitAdd() {
    if (!addId) return;
    onPick && onPick(dayIndex, addId, addHours === "" ? 0 : Number(addHours));
    setAddId("");
    setAddHours("1");
    setShowAdd(false);
  }

  return (
    <div className={`border rounded-lg p-2.5 min-h-[88px] flex flex-col ${
      blocked ? "border-zinc-800/60 bg-zinc-900/30" :
      isToday ? "border-green-500/50 bg-green-500/5" :
      isPast ? "border-zinc-800/40 bg-zinc-900/20 opacity-60" :
      "border-zinc-800 bg-zinc-950/40"
    }`}>
      <div className="flex items-center justify-between mb-1.5 gap-1">
        <span className={`text-xs font-semibold ${isToday ? "text-green-400" : "text-zinc-400"}`}>
          {day.label}
        </span>
        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          {isToday && <span className="text-[9px] text-green-400 font-bold uppercase tracking-wider">Today</span>}
          {blocked ? (
            onRestoreDay && (
              <button
                onClick={() => onRestoreDay(dayIndex)}
                className="text-[9px] uppercase tracking-wider text-zinc-500 hover:text-green-400 transition flex items-center gap-0.5"
                title="Restore this day to the schedule"
              >
                <RotateCcw className="w-2.5 h-2.5" /> Restore
              </button>
            )
          ) : (
            <>
              {hasPicks && onClearDay && (
                <button
                  onClick={() => onClearDay(dayIndex)}
                  className="text-[9px] uppercase tracking-wider text-zinc-500 hover:text-amber-400 transition flex items-center gap-0.5"
                  title="Clear items you pinned to this day"
                >
                  <X className="w-2.5 h-2.5" /> Clear
                </button>
              )}
              {hasAllocations && onResetDay && (
                <button
                  onClick={() => onResetDay(dayIndex)}
                  className="text-[9px] uppercase tracking-wider text-zinc-500 hover:text-rose-400 transition flex items-center gap-0.5"
                  title="Reset — clear this day's allocated projects and redistribute them"
                >
                  <RotateCcw className="w-2.5 h-2.5" /> Reset
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {blocked ? (
        <p className="text-[11px] text-zinc-600 italic mt-1">Day cleared — work redistributed to your other days.</p>
      ) : (
        <>
          {!isPast && capacity > 0 && (
            <div className="mb-2">
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className={over ? "text-rose-400 font-semibold" : "text-zinc-500"}>{used}h / {capacity}h</span>
                {over ? <span className="text-rose-400 font-semibold">over</span> : <span className="text-zinc-600">{free}h free</span>}
              </div>
              <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className={`h-full ${over ? "bg-rose-500" : used >= capacity ? "bg-amber-500" : "bg-green-500"}`} style={{ width: `${pct}%` }}></div>
              </div>
            </div>
          )}

          {hasItems && (
            <ul className="space-y-1 mb-2">
              {items.map((item, idx) => {
                const p = item.project;
                const status = STATUSES.find(s => s.id === p.status);
                const sub = item.kind === "ritual" ? "Recurring" : null;

                if (item.isPick) {
                  return (
                    <li key={idx} className="text-[11px] leading-tight rounded border border-zinc-800 bg-zinc-900/40 p-1.5 space-y-1 group">
                      <div className="flex items-start gap-1.5">
                        <span className={`w-1 h-1 rounded-full ${status?.dot} flex-shrink-0 mt-1.5`}></span>
                        <div className="min-w-0 flex-1">
                          <div className="text-zinc-200 line-clamp-2">{p.name}</div>
                          <div className="text-[10px] text-zinc-600">{item.kind === "ritual" ? "Recurring" : item.kind === "work" ? "Suggested" : "Added"}</div>
                        </div>
                        {onUnpick && (
                          <button
                            onClick={() => onUnpick(dayIndex, p.id)}
                            className="text-zinc-500 hover:text-rose-400 transition flex-shrink-0 mt-0.5"
                            title="Remove from this day"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      <div className="flex items-center gap-1 pl-2.5">
                        <input
                          type="number" min="0" step="0.5"
                          value={item.hours || ""}
                          onChange={(e) => onSetPickHours && onSetPickHours(dayIndex, p.id, e.target.value)}
                          placeholder="0"
                          className="w-11 bg-zinc-950 border border-zinc-800 rounded px-1 py-0.5 text-[11px] text-zinc-200 focus:outline-none focus:border-green-500"
                          title="Hours planned"
                        />
                        <span className="text-[10px] text-zinc-600">h</span>
                        <select
                          value={dayIndex}
                          onChange={(e) => onMovePick && onMovePick(dayIndex, Number(e.target.value), p.id)}
                          className="ml-auto bg-zinc-950 border border-zinc-800 rounded px-1 py-0.5 text-[10px] text-zinc-300 focus:outline-none focus:border-green-500"
                          title="Move to another day"
                        >
                          {dayMeta.map((dm, di) => (
                            <option key={di} value={di} disabled={dm.disabled && di !== dayIndex}>{dm.label}</option>
                          ))}
                        </select>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={idx} className="text-[11px] leading-tight flex items-start gap-1.5">
                    <span className={`w-1 h-1 rounded-full ${status?.dot} flex-shrink-0 mt-1.5`}></span>
                    <div className="min-w-0 flex-1">
                      <div className="text-zinc-200 line-clamp-2">{p.name}</div>
                      {sub && <div className="text-[10px] text-zinc-600">{sub}</div>}
                    </div>
                    {item.hours > 0 && (
                      <span className="text-[10px] text-zinc-400 font-medium flex-shrink-0 mt-0.5 tabular-nums">{item.hours}h</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {!isPast && (
            showAdd ? (
              <div className="mb-2 space-y-1 rounded border border-green-500/30 bg-green-500/5 p-1.5">
                <select
                  value={addId}
                  onChange={(e) => setAddId(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-1.5 py-1 text-[11px] text-zinc-200 focus:outline-none focus:border-green-500"
                >
                  <option value="">Choose a project…</option>
                  {addOptions.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
                <div className="flex items-center gap-1">
                  <input
                    type="number" min="0" step="0.5"
                    value={addHours}
                    onChange={(e) => setAddHours(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") commitAdd(); }}
                    placeholder="Hrs"
                    className="w-12 bg-zinc-950 border border-zinc-800 rounded px-1 py-0.5 text-[11px] text-zinc-200 focus:outline-none focus:border-green-500"
                  />
                  <span className="text-[10px] text-zinc-600">h</span>
                  <button
                    onClick={commitAdd}
                    disabled={!addId}
                    className="ml-auto px-2 py-0.5 rounded bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 text-[10px] font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => { setShowAdd(false); setAddId(""); }}
                    className="px-1.5 py-0.5 rounded text-zinc-500 hover:text-zinc-300 text-[10px]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAdd(true)}
                className="mb-2 w-full text-[10px] uppercase tracking-wider text-zinc-500 hover:text-green-400 transition flex items-center justify-center gap-1 rounded border border-dashed border-zinc-800 hover:border-green-500/50 py-1"
                title="Add a project to this day"
              >
                <Plus className="w-2.5 h-2.5" /> Add work
              </button>
            )
          )}

          {suggestions.length > 0 ? (
            <div className="mt-auto">
              <div className="text-[9px] uppercase tracking-wider text-zinc-600 mb-1">
                {hasItems ? "Spare capacity" : "Suggested · pick one"}
              </div>
              <div className="space-y-1">
                {suggestions.map(p => {
                  const status = STATUSES.find(s => s.id === p.status);
                  return (
                    <button
                      key={p.id}
                      onClick={() => onPick && onPick(dayIndex, p.id)}
                      className="w-full text-left text-[11px] leading-tight flex items-start gap-1.5 rounded px-1 py-1 border border-dashed border-zinc-800 hover:border-green-500/50 hover:bg-green-500/5 transition"
                      title="Pin to this day"
                    >
                      <span className={`w-1 h-1 rounded-full ${status?.dot} flex-shrink-0 mt-1.5`}></span>
                      <span className="min-w-0 flex-1 text-zinc-400 line-clamp-2">{p.name}</span>
                      <Plus className="w-2.5 h-2.5 text-zinc-600 flex-shrink-0 mt-0.5" />
                    </button>
                  );
                })}
              </div>
            </div>
          ) : !hasItems && !isPast ? (
            <p className="text-[11px] text-zinc-600 italic mt-auto">Open block — add work above</p>
          ) : null}
        </>
      )}
    </div>
  );
}

function TimeLog({ projects, completed = [], timeHandlers }) {
  const [collapsed, setCollapsed] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState(todayISO());
  const [calMonth, setCalMonth] = useState(() => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });

  function submit() {
    const h = Number(hours);
    if (!projectId || !h || h <= 0) return;
    timeHandlers.logTime(projectId, h, date);
    setHours("");
  }

  const summary = projects
    .map(p => {
      const logged = sumHours(p.timeEntries);
      const est = typeof p.estimatedHours === "number" ? p.estimatedHours : null;
      return { p, logged, est };
    })
    .filter(x => x.logged > 0 || x.est !== null)
    .sort((a, b) => b.logged - a.logged);

  const maxLogged = Math.max(1, ...summary.map(s => Math.max(s.logged, s.est || 0)));
  const totalLogged = projects.reduce((s, p) => s + sumHours(p.timeEntries), 0);

  const recent = [];
  projects.forEach(p => (p.timeEntries || []).forEach(e => recent.push({ ...e, project: p })));
  recent.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const recentTop = recent.slice(0, 12);

  const calYear = calMonth.getFullYear();
  const calMon = calMonth.getMonth();
  const calStartWeekday = new Date(calYear, calMon, 1).getDay();
  const calDaysInMonth = new Date(calYear, calMon + 1, 0).getDate();
  const calGridStart = new Date(calYear, calMon, 1 - calStartWeekday);
  const calCells = Array.from({ length: Math.ceil((calStartWeekday + calDaysInMonth) / 7) * 7 }, (_, i) => {
    const d = new Date(calGridStart);
    d.setDate(calGridStart.getDate() + i);
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const calToday = new Date(); calToday.setHours(0, 0, 0, 0);
  function calIso(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  const calDayTotals = {};
  [...projects, ...completed].forEach(p => (p.timeEntries || []).forEach(e => {
    if (!e.date) return;
    calDayTotals[e.date] = (calDayTotals[e.date] || 0) + (Number(e.hours) || 0);
  }));
  const calMonthLabel = calMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const calWeekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-xl mb-6 overflow-hidden">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-900/40 transition text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <Timer className="w-4 h-4 text-green-400" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold">Time Log</div>
            <div className="text-xs text-zinc-400 truncate">{totalLogged}h logged across all projects</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 flex-shrink-0 ml-2">
          {collapsed ? "Show" : "Hide"}
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 space-y-6 border-t border-zinc-800/50 pt-4">
          <div>
            <button
              onClick={() => setShowArchive(true)}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-300 hover:text-green-200 inline-flex items-center gap-1.5 transition"
            >
              <Archive className="w-3.5 h-3.5" />
              Weekly Archive
            </button>
          </div>
          {showArchive && (
            <TimeArchiveModal projects={projects} completed={completed} onClose={() => setShowArchive(false)} />
          )}
          <div>
            <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
              <h3 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Calendar</h3>
              <div className="flex items-center gap-1">
                <span className="text-xs text-zinc-400 mr-1">{calMonthLabel}</span>
                <button
                  onClick={() => { const d = new Date(); setCalMonth(new Date(d.getFullYear(), d.getMonth(), 1)); setDate(todayISO()); }}
                  className="px-2 py-1 rounded-md text-[11px] font-medium bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 transition"
                >
                  Today
                </button>
                <button
                  onClick={() => setCalMonth(new Date(calYear, calMon - 1, 1))}
                  className="p-1 rounded-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 transition"
                  title="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCalMonth(new Date(calYear, calMon + 1, 1))}
                  className="p-1 rounded-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 transition"
                  title="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-1">
              {calWeekdays.map(w => (
                <div key={w} className="text-[10px] uppercase tracking-wider text-zinc-500 text-center py-0.5">{w}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {calCells.map((d, i) => {
                const k = calIso(d);
                const inMonth = d.getMonth() === calMon;
                const isToday = d.getTime() === calToday.getTime();
                const selected = k === date;
                const total = calDayTotals[k] || 0;
                return (
                  <button
                    key={i}
                    onClick={() => setDate(k)}
                    className={`aspect-square rounded-md border p-1 flex flex-col items-start text-left transition ${
                      selected ? "border-green-500 bg-green-500/10" :
                      isToday ? "border-green-500/40 bg-green-500/5" :
                      inMonth ? "border-zinc-800 bg-zinc-950/40 hover:border-zinc-700" :
                      "border-zinc-800/40 bg-zinc-900/20 hover:border-zinc-700"
                    }`}
                  >
                    <span className={`text-[11px] ${isToday ? "text-green-400 font-bold" : inMonth ? "text-zinc-300" : "text-zinc-600"}`}>{d.getDate()}</span>
                    {total > 0 && <span className="mt-auto text-[10px] text-green-300 font-medium tabular-nums">{Math.round(total * 10) / 10}h</span>}
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-zinc-600 mt-2 italic">Click a day to select it, then pick a project and log hours for that date below.</p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Log Hours</h3>
            <div className="flex flex-wrap items-center gap-2 bg-zinc-950/50 rounded-lg p-2.5 border border-zinc-800/50">
              <select
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                className="flex-1 min-w-[160px] px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-green-500"
              >
                <option value="">Select a project…</option>
                {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
              <input
                type="number" min="0" step="0.25"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
                placeholder="Hrs"
                className="w-16 px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-green-500"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-green-500"
              />
              <button
                onClick={submit}
                disabled={!projectId || !hours}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-green-500 hover:bg-green-400 text-white flex items-center gap-1.5 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Plus className="w-3.5 h-3.5" /> Log
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Hours per Project</h3>
            {summary.length === 0 ? (
              <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                <p className="text-xs text-zinc-600 italic">No hours logged yet. Log time above or set an estimate on a project.</p>
              </div>
            ) : (
              <div className="space-y-2 bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                {summary.map(({ p, logged, est }) => {
                  const remaining = est !== null ? est - logged : null;
                  const over = remaining !== null && remaining < 0;
                  const pct = (logged / maxLogged) * 100;
                  const estPct = est !== null ? (est / maxLogged) * 100 : null;
                  return (
                    <div key={p.id} className="text-xs">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-zinc-300 truncate">{p.name}</span>
                        <span className="text-zinc-400 flex-shrink-0 tabular-nums">
                          {logged}h{est !== null ? ` / ${est}h` : ""}
                          {remaining !== null && (
                            <span className={over ? "text-rose-400" : "text-emerald-300"}> · {over ? `${Math.abs(remaining)}h over` : `${remaining}h left`}</span>
                          )}
                        </span>
                      </div>
                      <div className="relative h-2 bg-zinc-800/70 rounded-full overflow-hidden">
                        {estPct !== null && (
                          <div className="absolute top-0 bottom-0 border-r border-zinc-500/60" style={{ left: `${Math.min(100, estPct)}%` }}></div>
                        )}
                        <div className={`h-full ${over ? "bg-rose-500" : "bg-green-500"}`} style={{ width: `${Math.min(100, pct)}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {recentTop.length > 0 && (
            <div>
              <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Recent Entries</h3>
              <div className="space-y-1 bg-zinc-950/50 rounded-lg p-2.5 border border-zinc-800/50 max-h-48 overflow-y-auto">
                {recentTop.map(e => (
                  <div key={e.id} className="flex items-center justify-between gap-2 text-xs text-zinc-400 group">
                    <span className="flex items-center gap-1.5 min-w-0">
                      <Clock className="w-3 h-3 text-zinc-600 flex-shrink-0" />
                      <span className="text-zinc-500 flex-shrink-0">{fmtDayString(e.date)}</span>
                      <span className="truncate text-zinc-300">{e.project.name}</span>
                    </span>
                    <span className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-zinc-200 font-medium tabular-nums">{e.hours}h</span>
                      <button
                        onClick={() => timeHandlers.removeTimeEntry(e.project.id, e.id)}
                        className="text-zinc-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition"
                        title="Remove entry"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TimeArchiveModal({ projects, completed, onClose }) {
  const all = [...projects, ...(completed || [])];
  const entries = [];
  all.forEach(p => {
    (p.timeEntries || []).forEach(e => {
      if (!e.date) return;
      entries.push({ id: e.id, date: e.date, hours: Number(e.hours) || 0, projectId: p.id, projectName: p.name });
    });
  });

  function isoKey(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  const todayMonday = getMondayOfWeek(new Date());
  const [weekMonday, setWeekMonday] = useState(todayMonday);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekMonday);
    d.setDate(weekMonday.getDate() + i);
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const weekKeys = new Set(weekDays.map(isoKey));
  const weekEntries = entries.filter(e => weekKeys.has(e.date));
  const weekTotal = Math.round(weekEntries.reduce((s, e) => s + e.hours, 0) * 10) / 10;

  const perProject = {};
  weekEntries.forEach(e => {
    if (!perProject[e.projectId]) perProject[e.projectId] = { name: e.projectName, hours: 0 };
    perProject[e.projectId].hours += e.hours;
  });
  const projectTotals = Object.values(perProject)
    .map(x => ({ ...x, hours: Math.round(x.hours * 10) / 10 }))
    .sort((a, b) => b.hours - a.hours);

  const weekMap = {};
  entries.forEach(e => {
    const m = getMondayOfWeek(new Date(e.date + "T00:00:00"));
    const k = isoKey(m);
    if (!weekMap[k]) weekMap[k] = { monday: m, hours: 0 };
    weekMap[k].hours += e.hours;
  });
  const activityWeeks = Object.values(weekMap)
    .map(w => ({ ...w, hours: Math.round(w.hours * 10) / 10 }))
    .sort((a, b) => b.monday - a.monday);

  const sunday = weekDays[6];
  const isCurrentWeek = isoKey(weekMonday) === isoKey(todayMonday);
  const isFutureWeek = weekMonday > todayMonday;
  const weekLabel = `${weekMonday.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${sunday.toLocaleDateString("en-US", { month: "short", day: "numeric" })}, ${sunday.getFullYear()}`;

  function shiftWeek(delta) {
    const d = new Date(weekMonday);
    d.setDate(weekMonday.getDate() + delta * 7);
    setWeekMonday(d);
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 px-5 py-4 flex items-center justify-between gap-3 z-10">
          <div className="flex items-center gap-2">
            <Archive className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-semibold">Weekly Time Archive</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-zinc-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <button onClick={() => shiftWeek(-1)} className="p-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 transition" title="Previous week">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="text-center min-w-[190px]">
                <div className="text-sm font-semibold">{weekLabel}</div>
                <div className="text-[11px] text-zinc-500">
                  {isCurrentWeek ? "Current week" : isFutureWeek ? "Upcoming" : "Archived week"} · {weekTotal}h logged
                </div>
              </div>
              <button onClick={() => shiftWeek(1)} disabled={isCurrentWeek || isFutureWeek} className="p-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 transition disabled:opacity-30 disabled:cursor-not-allowed" title="Next week">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            {!isCurrentWeek && (
              <button onClick={() => setWeekMonday(todayMonday)} className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 transition">
                This week
              </button>
            )}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((d, i) => {
              const key = isoKey(d);
              const dayEntries = weekEntries.filter(e => e.date === key);
              const byProject = {};
              dayEntries.forEach(e => {
                if (!byProject[e.projectId]) byProject[e.projectId] = { name: e.projectName, hours: 0 };
                byProject[e.projectId].hours += e.hours;
              });
              const dayItems = Object.values(byProject).map(x => ({ ...x, hours: Math.round(x.hours * 10) / 10 })).sort((a, b) => b.hours - a.hours);
              const dayTotal = Math.round(dayEntries.reduce((s, e) => s + e.hours, 0) * 10) / 10;
              const isToday = d.getTime() === today.getTime();
              const isFuture = d > today;
              return (
                <div key={i} className={`rounded-lg border p-2 min-h-[120px] flex flex-col ${isToday ? "border-green-500/50 bg-green-500/5" : isFuture ? "border-zinc-800/40 bg-zinc-900/20" : "border-zinc-800 bg-zinc-950/40"}`}>
                  <div className="flex items-center justify-between mb-1.5 gap-1">
                    <span className={`text-[11px] font-semibold ${isToday ? "text-green-400" : "text-zinc-400"}`}>
                      {d.toLocaleDateString("en-US", { weekday: "short" })} {d.getDate()}
                    </span>
                    {dayTotal > 0 && <span className="text-[10px] text-zinc-400 font-medium tabular-nums flex-shrink-0">{dayTotal}h</span>}
                  </div>
                  {dayItems.length === 0 ? (
                    <div className="text-[10px] text-zinc-600 italic mt-1">{isFuture ? "—" : "No work logged"}</div>
                  ) : (
                    <ul className="space-y-1">
                      {dayItems.map((it, j) => (
                        <li key={j} className="text-[11px] leading-tight flex items-start gap-1">
                          <span className="min-w-0 flex-1 text-zinc-300 line-clamp-2">{it.name}</span>
                          <span className="text-[10px] text-zinc-500 font-medium flex-shrink-0 tabular-nums">{it.hours}h</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-3 h-3" /> This week by project
            </h3>
            {projectTotals.length === 0 ? (
              <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                <p className="text-xs text-zinc-600 italic">No hours were logged this week.</p>
              </div>
            ) : (
              <div className="space-y-1.5 bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                {projectTotals.map((pt, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-zinc-300 truncate">{pt.name}</span>
                    <span className="text-zinc-400 flex-shrink-0 tabular-nums">{pt.hours}h</span>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-2 text-sm pt-1.5 mt-1 border-t border-zinc-800/50 font-semibold">
                  <span className="text-zinc-200">Total</span>
                  <span className="text-green-300 tabular-nums">{weekTotal}h</span>
                </div>
              </div>
            )}
          </div>

          {activityWeeks.length > 0 && (
            <div>
              <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <CalendarDays className="w-3 h-3" /> Weeks with activity
              </h3>
              <div className="space-y-1 bg-zinc-950/50 rounded-lg p-2.5 border border-zinc-800/50 max-h-56 overflow-y-auto">
                {activityWeeks.map((w, i) => {
                  const wSunday = new Date(w.monday);
                  wSunday.setDate(w.monday.getDate() + 6);
                  const label = `${w.monday.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${wSunday.toLocaleDateString("en-US", { month: "short", day: "numeric" })}, ${wSunday.getFullYear()}`;
                  const selected = isoKey(w.monday) === isoKey(weekMonday);
                  const current = isoKey(w.monday) === isoKey(todayMonday);
                  return (
                    <button key={i} onClick={() => setWeekMonday(new Date(w.monday))} className={`w-full flex items-center justify-between gap-2 text-sm rounded-md px-2 py-1.5 transition ${selected ? "bg-green-500/15 text-green-200 border border-green-500/30" : "hover:bg-zinc-800/60 text-zinc-300 border border-transparent"}`}>
                      <span className="flex items-center gap-2 min-w-0">
                        <Clock className="w-3 h-3 text-zinc-600 flex-shrink-0" />
                        <span className="truncate">{label}{current ? " (current)" : ""}</span>
                      </span>
                      <span className="text-xs text-zinc-400 flex-shrink-0 tabular-nums">{w.hours}h</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LinkManager({ links, linkHandlers, projects, completed }) {
  const [collapsed, setCollapsed] = useState(false);
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");
  const [projectId, setProjectId] = useState("");

  const allProjects = [...projects, ...completed];
  const nameOf = (id) => {
    if (!id) return null;
    const p = allProjects.find(x => x.id === id);
    return p ? p.name : "Unknown project";
  };

  function add() {
    if (!url.trim()) return;
    linkHandlers.addLink({ url, label, projectId });
    setUrl(""); setLabel("");
  }

  const groups = {};
  links.forEach(l => {
    const key = l.projectId || "__none__";
    (groups[key] = groups[key] || []).push(l);
  });
  const orderedKeys = Object.keys(groups).sort((a, b) => {
    if (a === "__none__") return 1;
    if (b === "__none__") return -1;
    return (nameOf(a) || "").localeCompare(nameOf(b) || "");
  });

  return (
    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-xl mb-6 overflow-hidden">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-900/40 transition text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <LinkIcon className="w-4 h-4 text-green-400" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold">Link Manager</div>
            <div className="text-xs text-zinc-400 truncate">{links.length} link{links.length === 1 ? "" : "s"} saved</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 flex-shrink-0 ml-2">
          {collapsed ? "Show" : "Hide"}
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 space-y-6 border-t border-zinc-800/50 pt-4">
          <div>
            <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Add Link</h3>
            <div className="bg-zinc-950/50 rounded-lg p-2.5 border border-zinc-800/50 space-y-2">
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Label (optional) — e.g., Figma file"
                className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-green-500"
              />
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") add(); }}
                  placeholder="Paste URL"
                  className="flex-1 min-w-[180px] px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-green-500"
                />
                <select
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  className="px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-green-500"
                >
                  <option value="">No project</option>
                  {allProjects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
                <button
                  onClick={add}
                  disabled={!url.trim()}
                  className="px-3 py-1.5 rounded-md text-sm font-medium bg-green-500 hover:bg-green-400 text-white flex items-center gap-1.5 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Plus className="w-3.5 h-3.5" /> Add
                </button>
              </div>
            </div>
          </div>

          {links.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed border-zinc-800 rounded-lg">
              <LinkIcon className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
              <p className="text-sm text-zinc-500">No links yet. Paste one above, or add links from a project card.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orderedKeys.map(key => (
                <div key={key}>
                  <h4 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                    {key === "__none__" ? (
                      <span className="text-zinc-500">Unassigned</span>
                    ) : (
                      <><Briefcase className="w-3 h-3" /> {nameOf(key)}</>
                    )}
                    <span className="text-zinc-600 font-normal">({groups[key].length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {groups[key]
                      .slice()
                      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
                      .map(l => (
                        <div key={l.id} className="flex items-center gap-2 bg-zinc-950/50 rounded-lg p-2 border border-zinc-800/50 group">
                          <a
                            href={hrefFor(l.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 min-w-0 flex-1 text-sm text-zinc-200 hover:text-green-300 transition"
                            title={l.url}
                          >
                            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-zinc-500" />
                            <span className="min-w-0">
                              <span className="block truncate">{l.label || l.url}</span>
                              {l.label && <span className="block truncate text-[11px] text-zinc-600">{l.url}</span>}
                            </span>
                          </a>
                          <select
                            value={l.projectId || ""}
                            onChange={(e) => linkHandlers.updateLink(l.id, { projectId: e.target.value })}
                            className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-xs text-zinc-300 focus:outline-none focus:border-green-500 max-w-[140px]"
                            title="Attribute to a project"
                          >
                            <option value="">No project</option>
                            {allProjects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                          </select>
                          <button
                            onClick={() => linkHandlers.removeLink(l.id)}
                            className="p-1 rounded text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition flex-shrink-0"
                            title="Delete link"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LinkSection({ project: p, links, linkHandlers }) {
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");
  const mine = (links || []).filter(l => l.projectId === p.id).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

  function add() {
    if (!url.trim()) return;
    linkHandlers.addLink({ url, label, projectId: p.id });
    setUrl(""); setLabel("");
  }

  return (
    <div className="mt-3 pt-3 border-t border-zinc-800 space-y-2">
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Label (optional)"
        className="w-full px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-xs text-zinc-200 focus:outline-none focus:border-green-500"
      />
      <div className="flex items-center gap-1.5">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") add(); }}
          placeholder="Paste URL"
          className="flex-1 min-w-0 px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-xs text-zinc-200 focus:outline-none focus:border-green-500"
        />
        <button
          onClick={add}
          className="px-2 py-1 rounded bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 text-xs font-medium flex items-center gap-1 flex-shrink-0"
        >
          <Plus className="w-3 h-3" /> Add
        </button>
      </div>

      {mine.length > 0 && (
        <div className="space-y-1">
          {mine.map(l => (
            <div key={l.id} className="flex items-center justify-between gap-2 text-[11px] bg-zinc-950/50 rounded px-2 py-1 group/link">
              <a
                href={hrefFor(l.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 min-w-0 flex-1 text-zinc-300 hover:text-green-300 transition"
                title={l.url}
              >
                <ExternalLink className="w-3 h-3 flex-shrink-0 text-zinc-500" />
                <span className="truncate">{l.label || l.url}</span>
              </a>
              <button
                onClick={() => linkHandlers.removeLink(l.id)}
                className="text-zinc-600 hover:text-rose-400 opacity-0 group-hover/link:opacity-100 transition flex-shrink-0"
                title="Delete link"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NotesSection({ projects, completed, onNoteToProject }) {
  const [collapsed, setCollapsed] = useState(false);
  const [notes, setNotes] = useState([]);
  const [body, setBody] = useState("");
  const [projectId, setProjectId] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get("motion-tracker:notes");
        if (r && r.value) {
          const loaded = JSON.parse(r.value);
          if (Array.isArray(loaded)) setNotes(loaded);
        }
      } catch (e) {}
    })();
  }, []);

  function persist(next) {
    setNotes(next);
    try { window.storage.set("motion-tracker:notes", JSON.stringify(next)); } catch (e) {}
  }

  const allProjects = [...projects, ...completed];
  const nameOf = (id) => {
    if (!id) return null;
    const p = allProjects.find(x => x.id === id);
    return p ? p.name : "Unknown project";
  };

  function add() {
    if (!body.trim()) return;
    const note = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
      body: body.trim(),
      projectId: projectId || "",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    persist([note, ...notes]);
    if (projectId && onNoteToProject) onNoteToProject(projectId, note.body);
    setBody("");
  }
  function update(id, patch) {
    persist(notes.map(n => n.id === id ? { ...n, ...patch, updatedAt: Date.now() } : n));
  }
  function remove(id) {
    persist(notes.filter(n => n.id !== id));
  }
  function startEdit(n) { setEditingId(n.id); setEditBody(n.body); }
  function commitEdit() {
    if (editingId) {
      const b = editBody.trim();
      if (b) update(editingId, { body: b });
    }
    setEditingId(null);
    setEditBody("");
  }
  function cancelEdit() { setEditingId(null); setEditBody(""); }

  const groups = {};
  notes.forEach(n => {
    const key = n.projectId || "__none__";
    (groups[key] = groups[key] || []).push(n);
  });
  const orderedKeys = Object.keys(groups).sort((a, b) => {
    if (a === "__none__") return 1;
    if (b === "__none__") return -1;
    return (nameOf(a) || "").localeCompare(nameOf(b) || "");
  });

  function formatWhen(ts) {
    if (!ts) return "";
    const d = new Date(ts);
    const diff = Math.floor((Date.now() - ts) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "today";
    if (diff === 1) return "yesterday";
    if (diff < 7) return `${diff}d ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  return (
    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-xl mb-6 overflow-hidden">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-900/40 transition text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <StickyNote className="w-4 h-4 text-green-400" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold">Notes</div>
            <div className="text-xs text-zinc-400 truncate">{notes.length} note{notes.length === 1 ? "" : "s"} saved</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 flex-shrink-0 ml-2">
          {collapsed ? "Show" : "Hide"}
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 space-y-6 border-t border-zinc-800/50 pt-4">
          <div>
            <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Add Note</h3>
            <div className="bg-zinc-950/50 rounded-lg p-2.5 border border-zinc-800/50 space-y-2">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Jot something down…"
                rows={3}
                className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-green-500 resize-none"
              />
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  className="flex-1 min-w-[160px] px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-green-500"
                >
                  <option value="">No project</option>
                  {allProjects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
                <button
                  onClick={add}
                  disabled={!body.trim()}
                  className="px-3 py-1.5 rounded-md text-sm font-medium bg-green-500 hover:bg-green-400 text-white flex items-center gap-1.5 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Plus className="w-3.5 h-3.5" /> Add
                </button>
              </div>
            </div>
          </div>

          {notes.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed border-zinc-800 rounded-lg">
              <StickyNote className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
              <p className="text-sm text-zinc-500">No notes yet. Write one above and optionally attribute it to a project.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orderedKeys.map(key => (
                <div key={key}>
                  <h4 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                    {key === "__none__" ? (
                      <span className="text-zinc-500">Unassigned</span>
                    ) : (
                      <><Briefcase className="w-3 h-3" /> {nameOf(key)}</>
                    )}
                    <span className="text-zinc-600 font-normal">({groups[key].length})</span>
                  </h4>
                  <div className="space-y-2">
                    {groups[key]
                      .slice()
                      .sort((a, b) => (b.updatedAt || b.createdAt || 0) - (a.updatedAt || a.createdAt || 0))
                      .map(n => (
                        <div key={n.id} className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50 group">
                          {editingId === n.id ? (
                            <div className="space-y-2">
                              <textarea
                                value={editBody}
                                onChange={(e) => setEditBody(e.target.value)}
                                rows={3}
                                autoFocus
                                className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-green-500 resize-none"
                              />
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={commitEdit}
                                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-green-500 hover:bg-green-400 text-white flex items-center gap-1.5 transition"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" /> Save
                                </button>
                                <button
                                  onClick={cancelEdit}
                                  className="px-2.5 py-1 rounded-md text-xs font-medium border border-zinc-800 hover:bg-zinc-800 text-zinc-300 transition"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <p className="text-sm text-zinc-200 whitespace-pre-wrap break-words">{n.body}</p>
                              <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-zinc-800/50">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="text-[11px] text-zinc-600 flex items-center gap-1 flex-shrink-0">
                                    <Clock className="w-3 h-3" /> {formatWhen(n.updatedAt || n.createdAt)}
                                  </span>
                                  <select
                                    value={n.projectId || ""}
                                    onChange={(e) => update(n.id, { projectId: e.target.value })}
                                    className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-xs text-zinc-300 focus:outline-none focus:border-green-500 max-w-[160px]"
                                    title="Attribute to a project"
                                  >
                                    <option value="">No project</option>
                                    {allProjects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                                  </select>
                                </div>
                                <div className="flex items-center gap-1 flex-shrink-0">
                                  <button
                                    onClick={() => startEdit(n)}
                                    className="p-1.5 rounded text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition"
                                    title="Edit note"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => remove(n.id)}
                                    className="p-1.5 rounded text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition"
                                    title="Delete note"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function DailyChecklist() {
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);

  const todayKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  };

  // Each item: { id, text, doneOn } where doneOn is the day-key it was last checked.
  // Comparing doneOn to today gives us a fresh, auto-resetting checklist every day.
  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get("motion-tracker:dailyChecklist");
        if (r && r.value) {
          const parsed = JSON.parse(r.value);
          if (Array.isArray(parsed)) setItems(parsed);
        }
      } catch (e) {}
      setLoaded(true);
    })();
  }, []);

  function persist(next) {
    setItems(next);
    try { window.storage.set("motion-tracker:dailyChecklist", JSON.stringify(next)); } catch (e) {}
  }

  const today = todayKey();
  const isDone = (it) => it.doneOn === today;

  function add() {
    const t = text.trim();
    if (!t) return;
    persist([...items, { id: Date.now().toString() + Math.random().toString(36).slice(2, 5), text: t, doneOn: null }]);
    setText("");
  }
  function toggle(id) {
    persist(items.map(it => it.id === id ? { ...it, doneOn: isDone(it) ? null : today } : it));
  }
  function remove(id) {
    persist(items.filter(it => it.id !== id));
  }

  const doneCount = items.filter(isDone).length;
  const total = items.length;
  const remaining = total - doneCount;

  return (
    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-xl mb-6 overflow-hidden">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-900/40 transition text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <ListChecks className="w-4 h-4 text-green-400" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold">Daily Checklist</div>
            <div className="text-xs text-zinc-400 truncate">
              {total === 0
                ? "Recurring tasks you don't want to forget"
                : remaining === 0
                  ? `All ${total} done today — nice`
                  : `${remaining} of ${total} left today`}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 flex-shrink-0 ml-2">
          {collapsed ? "Show" : "Hide"}
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 border-t border-zinc-800/50 pt-4 space-y-4">
          <div className="flex items-center gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") add(); }}
              placeholder="Add a daily task…"
              className="flex-1 px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-200 focus:outline-none focus:border-green-500"
            />
            <button
              onClick={add}
              disabled={!text.trim()}
              className="px-3 py-2 rounded-lg text-sm font-medium bg-green-500 hover:bg-green-400 text-white flex items-center gap-1.5 transition disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>

          {total === 0 ? (
            <div className="text-center py-8 border-2 border-dashed border-zinc-800 rounded-lg">
              <ListChecks className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
              <p className="text-sm text-zinc-500">No tasks yet. Add things you do every day so they don't slip.</p>
            </div>
          ) : (
            <>
              <div className="space-y-1.5">
                {items.map(it => {
                  const done = isDone(it);
                  return (
                    <div
                      key={it.id}
                      className="group flex items-center gap-3 bg-zinc-950/50 border border-zinc-800/50 rounded-lg px-3 py-2.5"
                    >
                      <button
                        onClick={() => toggle(it.id)}
                        className="flex-shrink-0"
                        title={done ? "Mark as not done" : "Mark as done"}
                      >
                        {done
                          ? <CheckCircle2 className="w-5 h-5 text-green-400" />
                          : <Circle className="w-5 h-5 text-zinc-600 hover:text-zinc-400 transition" />}
                      </button>
                      <span className={`flex-1 text-sm break-words ${done ? "text-zinc-500 line-through" : "text-zinc-200"}`}>
                        {it.text}
                      </span>
                      <button
                        onClick={() => remove(it.id)}
                        className="p-1.5 rounded-md text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition flex-shrink-0 opacity-0 group-hover:opacity-100"
                        title="Remove task"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-zinc-600 italic">
                Check-offs reset each day — your task list stays.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function CompletedView({ completed, onRestore, onBack }) {
  const sorted = [...completed].sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0));

  function formatCompletedAt(ts) {
    if (!ts) return "recently";
    const d = new Date(ts);
    const diff = Math.floor((Date.now() - ts) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "today";
    if (diff === 1) return "yesterday";
    if (diff < 7) return `${diff}d ago`;
    if (diff < 30) return `${Math.floor(diff / 7)}w ago`;
    return d.toLocaleDateString();
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <button
          onClick={onBack}
          className="px-3 py-2 rounded-lg text-sm font-medium bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 flex items-center gap-2 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </button>
        <h2 className="text-sm text-zinc-400 flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-400" />
          Completed · {sorted.length} project{sorted.length === 1 ? "" : "s"}
        </h2>
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-zinc-800 rounded-xl">
          <Award className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
          <h3 className="text-lg font-medium mb-1">Nothing here yet</h3>
          <p className="text-sm text-zinc-500">
            Move delivered projects out of the tracker by clicking <span className="text-emerald-400 font-medium">Complete</span> on their cards.
          </p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {sorted.map(p => (
            <CompletedCard key={p.id} project={p} onRestore={onRestore} formatCompletedAt={formatCompletedAt} />
          ))}
        </div>
      )}
    </>
  );
}

function CompletedCard({ project: p, onRestore, formatCompletedAt }) {
  const verdict = deliveryVerdict(p);
  const verdictLabel = verdict === "early" ? "Early" : verdict === "ontime" ? "On Time" : verdict === "late" ? "Late" : null;
  const verdictClass = verdict === "late"
    ? "bg-rose-500/20 text-rose-300 border-rose-500/30"
    : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
  const stakeholderSummary = formatStakeholdersCompact(p.stakeholders);
  const logged = sumHours(p.timeEntries);
  const est = typeof p.estimatedHours === "number" ? p.estimatedHours : null;

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 hover:border-emerald-700/50 transition">
      <div className="mb-3">
        <h3 className="font-semibold break-words text-zinc-200">{p.name}</h3>
        {stakeholderSummary && (
          <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
            <Users className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{stakeholderSummary}</span>
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="text-xs text-zinc-500 flex items-center gap-1">
          <Tag className="w-3 h-3" />
          {p.type}
        </span>
        {verdictLabel && (
          <span className={`text-[11px] px-2 py-0.5 rounded-md border font-semibold ${verdictClass}`}>
            {verdictLabel}
          </span>
        )}
      </div>

      {p.notes && <p className="text-sm text-zinc-500 mb-3 line-clamp-2">{p.notes}</p>}

      <div className="space-y-1 text-xs text-zinc-500 mb-3">
        {logged > 0 && (
          <div className="flex items-center gap-1">
            <Timer className="w-3 h-3 flex-shrink-0" />
            {logged}h logged{est !== null ? ` of ${est}h est.` : ""}
          </div>
        )}
        {p.deliveredAt && (
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
            Delivered {fmtDate(p.deliveredAt)}
          </div>
        )}
        {p.completedAt && (
          <div className="flex items-center gap-1">
            <Archive className="w-3 h-3 flex-shrink-0" />
            Completed {formatCompletedAt(p.completedAt)}
          </div>
        )}
      </div>

      <button
        onClick={() => onRestore(p.id)}
        className="w-full px-3 py-2 rounded-md text-xs font-medium bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 flex items-center justify-center gap-1.5 transition"
        title="Restore to Delivered column"
      >
        <RotateCcw className="w-3 h-3" />
        Restore
      </button>
    </div>
  );
}

function TrashView({ trash, onRestore, onClearAll, onBack }) {
  const sorted = [...trash].sort((a, b) => (b.deletedAt || 0) - (a.deletedAt || 0));

  function formatDeletedAt(ts) {
    if (!ts) return "recently";
    const d = new Date(ts);
    const diff = Math.floor((Date.now() - ts) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "today";
    if (diff === 1) return "yesterday";
    if (diff < 7) return `${diff}d ago`;
    return d.toLocaleDateString();
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <button
          onClick={onBack}
          className="px-3 py-2 rounded-lg text-sm font-medium bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 flex items-center gap-2 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </button>
        <div className="flex items-center gap-2">
          <h2 className="text-sm text-zinc-400">
            Trash · {sorted.length} item{sorted.length === 1 ? "" : "s"}
          </h2>
          <button
            onClick={onClearAll}
            disabled={sorted.length === 0}
            className="px-3 py-2 rounded-lg text-sm font-medium bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 flex items-center gap-2 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-rose-500/10"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-zinc-800 rounded-xl">
          <Trash2 className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
          <h3 className="text-lg font-medium mb-1">Trash is empty</h3>
          <p className="text-sm text-zinc-500">Deleted projects will appear here</p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {sorted.map(p => (
            <TrashCard key={p.id} project={p} onRestore={onRestore} formatDeletedAt={formatDeletedAt} />
          ))}
        </div>
      )}
    </>
  );
}

function TrashCard({ project: p, onRestore, formatDeletedAt }) {
  const status = STATUSES.find(s => s.id === p.status);
  const stakeholderSummary = formatStakeholdersCompact(p.stakeholders);
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition">
      <div className="mb-3">
        <h3 className="font-semibold break-words text-zinc-300">{p.name}</h3>
        {stakeholderSummary && (
          <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
            <Users className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{stakeholderSummary}</span>
          </p>
        )}
      </div>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className={`text-xs px-2 py-1 rounded-md border ${status.color}`}>{status.label}</span>
        <span className="text-xs text-zinc-500 flex items-center gap-1">
          <Tag className="w-3 h-3" />
          {p.type}
        </span>
      </div>
      {p.notes && <p className="text-sm text-zinc-500 mb-3 line-clamp-2">{p.notes}</p>}
      <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
        <span className="text-xs text-zinc-500">Deleted {formatDeletedAt(p.deletedAt)}</span>
        <button
          onClick={() => onRestore(p.id)}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 flex items-center gap-1.5 transition"
          title={`Restore to ${status.label}`}
        >
          <RotateCcw className="w-3 h-3" />
          Restore
        </button>
      </div>
    </div>
  );
}

function CardsView({ projects, filter, setFilter, counts, onEdit, onRemove, onSetStatus, onComplete, deadlineLabel, timeHandlers, links, linkHandlers }) {
  const visible = projects
    .filter(p => filter === "all" || p.status === filter)
    .sort((a, b) => {
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;
      return new Date(a.deadline) - new Date(b.deadline);
    });

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition ${
            filter === "all" ? "bg-zinc-100 text-zinc-900 border-zinc-100" : "bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700"
          }`}
        >
          All ({projects.length})
        </button>
        {STATUSES.map(s => (
          <button
            key={s.id}
            onClick={() => setFilter(s.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition flex items-center gap-2 ${
              filter === s.id ? "bg-zinc-100 text-zinc-900 border-zinc-100" : "bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`}></span>
            {s.label} ({counts[s.id] || 0})
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-zinc-800 rounded-xl">
          <p className="text-zinc-500">No projects in this filter</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3 items-start">
          {visible.map(p => (
            <div key={p.id} className="w-72">
              <ProjectCard project={p} onEdit={onEdit} onRemove={onRemove} onSetStatus={onSetStatus} onComplete={onComplete} deadlineLabel={deadlineLabel} timeHandlers={timeHandlers} links={links} linkHandlers={linkHandlers} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function ProjectCard({ project: p, onEdit, onRemove, onSetStatus, onComplete, deadlineLabel, compact, timeHandlers, links, linkHandlers }) {
  const [showTime, setShowTime] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const status = STATUSES.find(s => s.id === p.status);
  const priority = PRIORITIES.find(pr => pr.id === p.priority);
  const isDelivered = p.status === "delivered";
  const dl = isDelivered ? null : deadlineLabel(p.deadline);
  const delivery = deliveryLabel(p);
  const stakeholderSummary = formatStakeholdersCompact(p.stakeholders);
  const stakeholderCount = (p.stakeholders || []).length;

  const loggedTotal = sumHours(p.timeEntries);
  const estTotal = typeof p.estimatedHours === "number" ? p.estimatedHours : null;
  const linkCount = (links || []).filter(l => l.projectId === p.id).length;

  let dateRangeText = null;
  if (p.startDate && p.deadline) dateRangeText = `${fmtDate(p.startDate)} → ${fmtDate(p.deadline)}`;
  else if (p.startDate) dateRangeText = `Starts ${fmtDate(p.startDate)}`;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition group">
      <div className="flex items-start justify-between mb-3 gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold leading-snug break-words">{p.name}</h3>
          {stakeholderSummary && (
            <p
              className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5"
              title={stakeholderCount > 1 ? (p.stakeholders || []).map(formatStakeholder).filter(Boolean).join(", ") : undefined}
            >
              {stakeholderCount > 1 ? <Users className="w-3 h-3 flex-shrink-0" /> : <User className="w-3 h-3 flex-shrink-0" />}
              <span className="truncate">{stakeholderSummary}</span>
            </p>
          )}
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
          <button onClick={() => onEdit(p)} className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100">
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => onRemove(p.id)} className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-rose-400" title="Move to trash">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!compact && (
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <select
            value={p.status}
            onChange={(e) => onSetStatus(p.id, e.target.value)}
            className={`text-xs px-2 py-1 rounded-md border cursor-pointer ${status.color}`}
          >
            {STATUSES.map(s => (
              <option key={s.id} value={s.id} className="bg-zinc-900 text-zinc-100">{s.label}</option>
            ))}
          </select>
          <span className="text-xs text-zinc-500 flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {p.type}
          </span>
        </div>
      )}

      {compact && (
        <div className="mb-3">
          <span className="text-xs text-zinc-500 flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {p.type}
          </span>
        </div>
      )}

      {p.notes && <p className="text-sm text-zinc-400 mb-3 line-clamp-2">{p.notes}</p>}

      <div className="flex items-start justify-between text-xs pt-3 border-t border-zinc-800 gap-2">
        <div className="flex items-center gap-1 flex-shrink-0">
          <AlertCircle className={`w-3 h-3 ${priority.color}`} />
          <span className={priority.color}>{priority.label}</span>
        </div>
        {(dateRangeText || dl || delivery) && (
          <div className="flex flex-col items-end gap-0.5 min-w-0">
            {dateRangeText && (
              <span className="text-zinc-500 flex items-center gap-1 truncate max-w-full">
                <CalendarDays className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{dateRangeText}</span>
              </span>
            )}
            {isDelivered && p.deliveredAt && (
              <span className="text-zinc-500 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                Delivered {fmtDate(p.deliveredAt)}
              </span>
            )}
            {delivery && (
              <span className={`mt-0.5 px-2 py-0.5 rounded-md text-[11px] font-semibold border ${delivery.pillClass}`}>
                {delivery.label}
              </span>
            )}
            {dl && (
              <span className={`flex items-center gap-1 ${dl.color}`}>
                <Clock className="w-3 h-3" />
                {dl.text}
              </span>
            )}
          </div>
        )}
      </div>

      {timeHandlers && (
        <div onMouseDown={(e) => e.stopPropagation()}>
          <button
            onClick={(e) => { e.stopPropagation(); setShowTime(v => !v); }}
            className="w-full mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 hover:text-zinc-200 transition"
          >
            <span className="flex items-center gap-1.5">
              <Timer className="w-3.5 h-3.5" /> Time
              {loggedTotal > 0 || estTotal !== null ? (
                <span className="text-zinc-500">
                  · {loggedTotal}h{estTotal !== null ? ` / ${estTotal}h` : " logged"}
                </span>
              ) : (
                <span className="text-zinc-600">· not tracked</span>
              )}
            </span>
            {showTime ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          {showTime && <TimeTracker project={p} timeHandlers={timeHandlers} />}
        </div>
      )}

      {linkHandlers && (
        <div onMouseDown={(e) => e.stopPropagation()}>
          <button
            onClick={(e) => { e.stopPropagation(); setShowLinks(v => !v); }}
            className="w-full mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 hover:text-zinc-200 transition"
          >
            <span className="flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5" /> Links
              {linkCount > 0 ? <span className="text-zinc-500">· {linkCount}</span> : <span className="text-zinc-600">· none</span>}
            </span>
            {showLinks ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          {showLinks && <LinkSection project={p} links={links} linkHandlers={linkHandlers} />}
        </div>
      )}

      {isDelivered && onComplete && (
        <button
          onClick={(e) => { e.stopPropagation(); onComplete(p.id); }}
          onMouseDown={(e) => e.stopPropagation()}
          className="w-full mt-3 px-3 py-2 rounded-md text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center gap-1.5 transition"
          title="Archive this project to the Completed folder"
        >
          <Archive className="w-3.5 h-3.5" />
          Complete
        </button>
      )}
    </div>
  );
}

function TimeTracker({ project: p, timeHandlers }) {
  const [hours, setHours] = useState("");
  const [date, setDate] = useState(todayISO());
  const [estDraft, setEstDraft] = useState(p.estimatedHours ?? "");

  useEffect(() => {
    setEstDraft(typeof p.estimatedHours === "number" ? p.estimatedHours : "");
  }, [p.estimatedHours]);

  const entries = [...(p.timeEntries || [])].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const logged = sumHours(entries);
  const est = typeof p.estimatedHours === "number" ? p.estimatedHours : null;
  const remaining = est !== null ? est - logged : null;
  const over = remaining !== null && remaining < 0;
  const pct = est && est > 0 ? Math.min(100, (logged / est) * 100) : 0;

  function add() {
    const h = Number(hours);
    if (!h || h <= 0) return;
    timeHandlers.logTime(p.id, h, date);
    setHours("");
  }

  function commitEst() {
    timeHandlers.setEstimatedHours(p.id, estDraft === "" ? null : estDraft);
  }

  return (
    <div className="mt-3 pt-3 border-t border-zinc-800 space-y-2.5">
      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="text-[9px] uppercase tracking-wider text-zinc-500 mb-1">Est. total</div>
          <div className="flex items-center justify-center gap-1">
            <input
              type="number" min="0" step="0.5"
              value={estDraft}
              onChange={(e) => setEstDraft(e.target.value)}
              onBlur={commitEst}
              onKeyDown={(e) => { if (e.key === "Enter") e.currentTarget.blur(); }}
              placeholder="—"
              className="w-12 bg-zinc-950 border border-zinc-800 rounded px-1 py-0.5 text-sm text-center text-zinc-200 focus:outline-none focus:border-green-500"
            />
            <span className="text-xs text-zinc-500">h</span>
          </div>
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider text-zinc-500 mb-1">Logged</div>
          <div className="text-sm font-semibold text-zinc-200 py-0.5">{logged}h</div>
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider text-zinc-500 mb-1">Remaining</div>
          <div className={`text-sm font-semibold py-0.5 ${over ? "text-rose-400" : remaining === null ? "text-zinc-600" : "text-emerald-300"}`}>
            {remaining === null ? "—" : `${remaining}h`}
          </div>
        </div>
      </div>

      {est !== null && est > 0 && (
        <div>
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className={`h-full ${over ? "bg-rose-500" : "bg-green-500"}`} style={{ width: `${pct}%` }}></div>
          </div>
          {over && <div className="text-[10px] text-rose-400 mt-1">Over estimate by {Math.abs(remaining)}h</div>}
        </div>
      )}

      <div className="flex items-center gap-1.5">
        <input
          type="number" min="0" step="0.25"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") add(); }}
          placeholder="Hrs"
          className="w-14 bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-200 focus:outline-none focus:border-green-500"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="flex-1 min-w-0 bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-200 focus:outline-none focus:border-green-500"
        />
        <button
          onClick={add}
          className="px-2 py-1 rounded bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 text-xs font-medium flex items-center gap-1 flex-shrink-0"
        >
          <Plus className="w-3 h-3" /> Log
        </button>
      </div>

      {entries.length > 0 && (
        <div className="space-y-1 max-h-28 overflow-y-auto">
          {entries.map(e => (
            <div key={e.id} className="flex items-center justify-between text-[11px] text-zinc-400 bg-zinc-950/50 rounded px-2 py-1 group/entry">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-zinc-600" />
                {fmtDayString(e.date)}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-zinc-300 font-medium">{e.hours}h</span>
                <button
                  onClick={() => timeHandlers.removeTimeEntry(p.id, e.id)}
                  className="text-zinc-600 hover:text-rose-400 opacity-0 group-hover/entry:opacity-100 transition"
                  title="Remove entry"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function KanbanView({ projects, onEdit, onRemove, onSetStatus, onReorder, onComplete, orderMode, onChangeOrderMode, deadlineLabel, timeHandlers, links, linkHandlers }) {
  const [draggedId, setDraggedId] = useState(null);
  const [dragOverCol, setDragOverCol] = useState(null);
  const [dragOverCard, setDragOverCard] = useState(null);

  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const dragMeta = useRef(null);
  const [scrollState, setScrollState] = useState({ left: 0, scrollWidth: 0, clientWidth: 0 });

  function measureScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setScrollState({ left: el.scrollLeft, scrollWidth: el.scrollWidth, clientWidth: el.clientWidth });
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    measureScroll();
    const onScroll = () => measureScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => measureScroll());
      ro.observe(el);
    } else {
      window.addEventListener("resize", measureScroll);
    }
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (ro) ro.disconnect(); else window.removeEventListener("resize", measureScroll);
    };
  }, []);

  const maxScroll = Math.max(0, scrollState.scrollWidth - scrollState.clientWidth);
  const overflowing = maxScroll > 1;
  const thumbPct = scrollState.scrollWidth > 0 ? Math.min(100, (scrollState.clientWidth / scrollState.scrollWidth) * 100) : 100;
  const thumbLeftPct = maxScroll > 0 ? (scrollState.left / maxScroll) * (100 - thumbPct) : 0;

  function onThumbPointerMove(e) {
    const d = dragMeta.current;
    const el = scrollRef.current;
    if (!d || !el) return;
    const usable = d.trackW - d.thumbW;
    if (usable <= 0) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollLeft = Math.max(0, Math.min(max, d.startLeft + (e.clientX - d.startX) * (max / usable)));
  }
  function onThumbPointerUp() {
    dragMeta.current = null;
    window.removeEventListener("pointermove", onThumbPointerMove);
    window.removeEventListener("pointerup", onThumbPointerUp);
  }
  function onThumbPointerDown(e) {
    e.preventDefault();
    e.stopPropagation();
    const track = trackRef.current;
    if (!track) return;
    dragMeta.current = { startX: e.clientX, startLeft: scrollState.left, trackW: track.clientWidth, thumbW: (thumbPct / 100) * track.clientWidth };
    window.addEventListener("pointermove", onThumbPointerMove);
    window.addEventListener("pointerup", onThumbPointerUp);
  }
  function onTrackPointerDown(e) {
    const track = trackRef.current;
    const el = scrollRef.current;
    if (!track || !el) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    el.scrollLeft = ratio * (el.scrollWidth - el.clientWidth);
  }

  function handleDragStart(e, projectId) {
    setDraggedId(projectId);
    e.dataTransfer.effectAllowed = "move";
    try { e.dataTransfer.setData("text/plain", projectId); } catch (err) {}
  }

  function handleDragEnd() {
    setDraggedId(null);
    setDragOverCol(null);
    setDragOverCard(null);
  }

  function handleColDragOver(e, statusId) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverCol !== statusId) setDragOverCol(statusId);
  }

  function handleColDragLeave(e, statusId) {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setDragOverCol(prev => (prev === statusId ? null : prev));
  }

  function handleColDrop(e, statusId) {
    e.preventDefault();
    if (draggedId) {
      const project = projects.find(p => p.id === draggedId);
      if (project && project.status !== statusId) {
        onReorder(draggedId, statusId, null, null);
      }
    }
    handleDragEnd();
  }

  function handleCardDragOver(e, projectId) {
    e.preventDefault();
    const draggedProject = projects.find(p => p.id === draggedId);
    const targetProject = projects.find(p => p.id === projectId);
    if (!draggedProject || !targetProject) return;
    if (orderMode === "urgency" && draggedProject.status === targetProject.status) return;

    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
    const rect = e.currentTarget.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    const position = e.clientY < midpoint ? "above" : "below";
    if (dragOverCard?.id !== projectId || dragOverCard?.position !== position) {
      setDragOverCard({ id: projectId, position });
    }
  }

  function handleCardDrop(e, projectId) {
    const draggedProject = projects.find(p => p.id === draggedId);
    const targetProject = projects.find(p => p.id === projectId);
    if (!draggedProject || !targetProject || draggedId === projectId) return;
    if (orderMode === "urgency" && draggedProject.status === targetProject.status) return;

    e.preventDefault();
    e.stopPropagation();
    const position = dragOverCard?.position || "below";
    onReorder(draggedId, targetProject.status, projectId, position);
    handleDragEnd();
  }

  return (
    <div>
    <div ref={scrollRef} className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex gap-3" style={{ minWidth: `${STATUSES.length * 220}px` }}>
        {STATUSES.map(s => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          let colProjects = projects.filter(p => p.status === s.id);
          if (orderMode === "urgency") {
            colProjects = [...colProjects].sort((a, b) => urgencyScore(b, today) - urgencyScore(a, today));
          } else {
            colProjects = [...colProjects].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
          }
          const isDropTarget = dragOverCol === s.id && !dragOverCard;
          return (
            <div key={s.id} className="flex-1 min-w-[220px]">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${s.dot}`}></span>
                  <h3 className="font-semibold text-sm">{s.label}</h3>
                  <span className="text-xs text-zinc-500">{colProjects.length}</span>
                </div>
              </div>
              <div
                className={`border rounded-xl p-2 min-h-32 space-y-2 transition ${
                  isDropTarget ? "bg-green-500/10 border-green-500/50 border-dashed" : "bg-zinc-900/50 border-zinc-800"
                }`}
                onDragOver={(e) => handleColDragOver(e, s.id)}
                onDragLeave={(e) => handleColDragLeave(e, s.id)}
                onDrop={(e) => handleColDrop(e, s.id)}
              >
                {colProjects.length === 0 ? (
                  <div className={`text-center py-6 text-xs ${isDropTarget ? "text-green-300" : "text-zinc-600"}`}>
                    {isDropTarget ? "Drop here" : "No projects"}
                  </div>
                ) : (
                  colProjects.map(p => {
                    const showIndicatorAbove = dragOverCard?.id === p.id && dragOverCard.position === "above";
                    const showIndicatorBelow = dragOverCard?.id === p.id && dragOverCard.position === "below";
                    return (
                      <div key={p.id} className="relative">
                        {showIndicatorAbove && (
                          <div className="absolute -top-1.5 left-0 right-0 h-0.5 bg-green-500 rounded-full z-10 shadow-lg shadow-green-500/50"></div>
                        )}
                        <div
                          draggable
                          onDragStart={(e) => handleDragStart(e, p.id)}
                          onDragEnd={handleDragEnd}
                          onDragOver={(e) => handleCardDragOver(e, p.id)}
                          onDrop={(e) => handleCardDrop(e, p.id)}
                          className={`cursor-grab active:cursor-grabbing transition ${draggedId === p.id ? "opacity-40" : ""}`}
                        >
                          <ProjectCard
                            project={p}
                            onEdit={onEdit}
                            onRemove={onRemove}
                            onSetStatus={onSetStatus}
                            onComplete={onComplete}
                            deadlineLabel={deadlineLabel}
                            timeHandlers={timeHandlers}
                            links={links}
                            linkHandlers={linkHandlers}
                            compact
                          />
                        </div>
                        {showIndicatorBelow && (
                          <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-green-500 rounded-full z-10 shadow-lg shadow-green-500/50"></div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
      {overflowing && (
        <div
          ref={trackRef}
          onPointerDown={onTrackPointerDown}
          className="mt-2 h-2.5 rounded-full bg-zinc-800 relative cursor-pointer select-none"
        >
          <div
            onPointerDown={onThumbPointerDown}
            className="absolute top-0 bottom-0 rounded-full bg-zinc-600 hover:bg-zinc-500 active:bg-green-500 cursor-grab active:cursor-grabbing transition-colors"
            style={{ width: `${thumbPct}%`, minWidth: "28px", left: `${thumbLeftPct}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

function TimelineView({ projects, onEdit, daysUntil }) {
  const withDeadlines = projects.filter(p => p.deadline);

  if (withDeadlines.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-dashed border-zinc-800 rounded-xl">
        <GanttChartSquare className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
        <h3 className="text-lg font-medium mb-1">No deadlines set</h3>
        <p className="text-sm text-zinc-500">Add deadlines to projects to see them on the timeline</p>
      </div>
    );
  }

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const startAnchor = (p) => new Date(p.startDate || p.createdAt || Date.now());

  const dates = withDeadlines.map(p => new Date(p.deadline));
  const startDates = withDeadlines.map(startAnchor);
  const allDates = [...dates, ...startDates, now];
  const minDate = new Date(Math.min(...allDates));
  const maxDate = new Date(Math.max(...allDates));

  minDate.setDate(minDate.getDate() - 3);
  maxDate.setDate(maxDate.getDate() + 3);

  const totalDays = Math.max(1, (maxDate - minDate) / (1000 * 60 * 60 * 24));
  const minDayWidth = 10;
  const labelColWidth = 200;

  const pct = (date) => ((new Date(date) - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100;

  const months = [];
  const current = new Date(minDate);
  current.setDate(1);
  while (current <= maxDate) {
    months.push({
      label: current.toLocaleDateString("en-US", { month: "short", year: "2-digit" }),
      offset: pct(current),
    });
    current.setMonth(current.getMonth() + 1);
  }

  const todayOffset = pct(now);

  const sorted = [...withDeadlines].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 overflow-x-auto">
      <div style={{ minWidth: `${totalDays * minDayWidth + labelColWidth + 24}px` }}>
        <div className="flex">
          <div className="flex-shrink-0 pr-3" style={{ width: `${labelColWidth}px` }}>
            <div className="h-8 mb-2"></div>
            <div className="space-y-2">
              {sorted.map(p => {
                const status = STATUSES.find(s => s.id === p.status);
                const stakeholderSummary = formatStakeholdersCompact(p.stakeholders);
                return (
                  <div key={p.id} className="h-8 flex items-center">
                    <button
                      onClick={() => onEdit(p)}
                      className="text-left w-full hover:bg-zinc-800/50 rounded-md px-2 py-1 transition"
                    >
                      <div className="text-sm font-medium truncate">{p.name}</div>
                      <div className="text-xs text-zinc-500 truncate flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot} flex-shrink-0`}></span>
                        <span className="truncate">{status.label}{stakeholderSummary ? ` · ${stakeholderSummary}` : ""}</span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 relative min-w-0">
            <div className="relative h-8 mb-2">
              {months.map((m, i) => (
                <div
                  key={i}
                  className="absolute top-0 text-xs text-zinc-500 border-l border-zinc-800 pl-2 h-full flex items-center"
                  style={{ left: `${m.offset}%` }}
                >
                  {m.label}
                </div>
              ))}
            </div>

            {todayOffset >= 0 && todayOffset <= 100 && (
              <div
                className="absolute pointer-events-none"
                style={{ left: `${todayOffset}%`, top: "40px", bottom: 0, borderLeft: "2px dashed rgb(244 63 94)", zIndex: 2 }}
              >
                <div className="absolute -top-5 -translate-x-1/2 text-xs text-rose-400 font-medium whitespace-nowrap">Today</div>
              </div>
            )}

            <div className="space-y-2">
              {sorted.map(p => {
                const status = STATUSES.find(s => s.id === p.status);
                const startOffset = Math.max(0, pct(startAnchor(p)));
                const endOffset = pct(p.deadline);
                const barWidthPct = Math.max(0.5, endOffset - startOffset);
                const overdue = daysUntil(p.deadline) < 0 && p.status !== "delivered";
                const delivery = deliveryLabel(p);
                const tooltip = delivery
                  ? `${delivery.label}${p.deliveredAt ? ` · delivered ${fmtDate(p.deliveredAt)}` : ""}${p.deadline ? ` · was due ${fmtDate(p.deadline)}` : ""}`
                  : p.startDate
                    ? `${fmtDate(p.startDate)} → ${fmtDate(p.deadline)}`
                    : `Due ${fmtDate(p.deadline)}`;

                return (
                  <div key={p.id} className="relative h-8">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-6 rounded-md cursor-pointer hover:brightness-125 transition flex items-center px-2 shadow-sm overflow-hidden"
                      style={{ left: `${startOffset}%`, width: `max(40px, ${barWidthPct}%)`, backgroundColor: "rgb(39 39 42)" }}
                      onClick={() => onEdit(p)}
                      title={tooltip}
                    >
                      <div className={`absolute inset-0 rounded-md opacity-80 ${status.bar}`}></div>
                      <div className="relative text-xs text-white font-medium truncate flex items-center gap-1.5">
                        {overdue && <AlertCircle className="w-3 h-3 flex-shrink-0" />}
                        <span className="truncate">{new Date(p.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap gap-3">
          {STATUSES.map(s => (
            <div key={s.id} className="flex items-center gap-1.5 text-xs text-zinc-400">
              <span className={`w-3 h-3 rounded ${s.bar} opacity-80`}></span>
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarView({ projects, onEdit }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [anchor, setAnchor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [mode, setMode] = useState("deadlines");

  const year = anchor.getFullYear();
  const month = anchor.getMonth();
  const monthStart = new Date(year, month, 1);
  const startWeekday = monthStart.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const gridStart = new Date(year, month, 1 - startWeekday);
  const totalCells = Math.ceil((startWeekday + daysInMonth) / 7) * 7;

  const cells = Array.from({ length: totalCells }, (_, i) => {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const keyOf = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const byDay = {};
  projects.forEach(p => {
    if (!p.deadline) return;
    const dl = new Date(p.deadline + "T00:00:00");
    dl.setHours(0, 0, 0, 0);
    if (mode === "schedule") {
      let start = new Date((p.startDate || p.deadline) + "T00:00:00");
      start.setHours(0, 0, 0, 0);
      if (start > dl) start = new Date(dl);
      let cur = new Date(start);
      let guard = 0;
      while (cur <= dl && guard < 400) {
        const k = keyOf(cur);
        (byDay[k] = byDay[k] || []).push(p);
        cur.setDate(cur.getDate() + 1);
        guard++;
      }
    } else {
      const k = keyOf(dl);
      (byDay[k] = byDay[k] || []).push(p);
    }
  });

  const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthLabel = anchor.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const withDeadlines = projects.filter(p => p.deadline).length;

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-semibold text-sm">{monthLabel}</h3>
          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 w-fit">
            <button
              onClick={() => setMode("deadlines")}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${mode === "deadlines" ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-zinc-100"}`}
              title="Show projects on their deadline date"
            >
              Deadlines
            </button>
            <button
              onClick={() => setMode("schedule")}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${mode === "schedule" ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-zinc-100"}`}
              title="Show projects across their start-to-deadline window"
            >
              Schedule
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setAnchor(new Date(today.getFullYear(), today.getMonth(), 1))}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 transition"
          >
            Today
          </button>
          <button
            onClick={() => setAnchor(new Date(year, month - 1, 1))}
            className="p-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 transition"
            title="Previous month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setAnchor(new Date(year, month + 1, 1))}
            className="p-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 transition"
            title="Next month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {withDeadlines === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-zinc-800 rounded-xl">
          <CalendarDays className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
          <h3 className="text-lg font-medium mb-1">No deadlines set</h3>
          <p className="text-sm text-zinc-500">Add deadlines to projects to see them on the calendar</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-7 gap-1 mb-1">
            {weekdayLabels.map(w => (
              <div key={w} className="text-[10px] uppercase tracking-wider text-zinc-500 text-center py-1">{w}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((d, i) => {
              const inMonth = d.getMonth() === month;
              const isToday = d.getTime() === today.getTime();
              const dayProjects = byDay[keyOf(d)] || [];
              return (
                <div
                  key={i}
                  className={`aspect-square overflow-hidden rounded-lg border p-1.5 flex flex-col ${
                    isToday ? "border-green-500/50 bg-green-500/5" :
                    inMonth ? "border-zinc-800 bg-zinc-950/40" :
                    "border-zinc-800/40 bg-zinc-900/20"
                  }`}
                >
                  <div className={`text-[11px] mb-1 ${isToday ? "text-green-400 font-bold" : inMonth ? "text-zinc-400" : "text-zinc-600"}`}>
                    {d.getDate()}
                  </div>
                  <div className="space-y-1 overflow-hidden">
                    {dayProjects.slice(0, 2).map(p => {
                      const status = STATUSES.find(s => s.id === p.status);
                      const overdue = mode === "deadlines" && d < today && p.status !== "delivered";
                      return (
                        <button
                          key={p.id}
                          onClick={() => onEdit(p)}
                          title={p.name}
                          className="w-full text-left flex items-center gap-1 rounded px-1 py-0.5 bg-zinc-900/60 hover:bg-zinc-800 transition"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${status?.dot} flex-shrink-0`}></span>
                          <span className={`text-[10px] truncate ${overdue ? "text-rose-300" : "text-zinc-200"}`}>{p.name}</span>
                        </button>
                      );
                    })}
                    {dayProjects.length > 2 && (
                      <div className="text-[10px] text-zinc-500 pl-1">+{dayProjects.length - 2} more</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-wrap gap-3">
            {STATUSES.map(s => (
              <div key={s.id} className="flex items-center gap-1.5 text-xs text-zinc-400">
                <span className={`w-2 h-2 rounded-full ${s.dot}`}></span>
                {s.label}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function StatsSection({ projects, completed }) {
  const [collapsed, setCollapsed] = useState(false);

  const all = [...projects, ...completed];

  const totalProjects = all.length;
  const totalCompleted = completed.length;
  const activeStatuses = ["discovery", "wip", "review", "revisions"];
  const activeNow = projects.filter(p => activeStatuses.includes(p.status)).length;

  const totalLogged = all.reduce((s, p) => s + sumHours(p.timeEntries), 0);

  const statusCounts = {};
  STATUSES.forEach(s => { statusCounts[s.id] = 0; });
  projects.forEach(p => { statusCounts[p.status] = (statusCounts[p.status] || 0) + 1; });
  const maxStatus = Math.max(1, ...Object.values(statusCounts));

  const typeCounts = {};
  PROJECT_TYPES.forEach(t => { typeCounts[t] = 0; });
  all.forEach(p => {
    if (p.type) typeCounts[p.type] = (typeCounts[p.type] || 0) + 1;
  });
  const sortedTypes = Object.entries(typeCounts).filter(([, c]) => c > 0).sort((a, b) => b[1] - a[1]);
  const maxType = Math.max(1, ...sortedTypes.map(([, c]) => c));

  const teamCounts = {};
  all.forEach(p => {
    const teamsInProject = new Set();
    (p.stakeholders || []).forEach(s => {
      const team = (s?.team || "").trim();
      if (team) teamsInProject.add(team);
    });
    teamsInProject.forEach(team => {
      teamCounts[team] = (teamCounts[team] || 0) + 1;
    });
  });
  const sortedTeams = Object.entries(teamCounts).sort((a, b) => b[1] - a[1]);
  const maxTeam = Math.max(1, ...sortedTeams.map(([, c]) => c));

  const contactCounts = {};
  all.forEach(p => {
    const namesInProject = new Set();
    (p.stakeholders || []).forEach(s => {
      const n = (s?.name || "").trim();
      if (n) namesInProject.add(n);
    });
    namesInProject.forEach(n => {
      contactCounts[n] = (contactCounts[n] || 0) + 1;
    });
  });
  const sortedContacts = Object.entries(contactCounts).sort((a, b) => b[1] - a[1]);

  let earlyCount = 0, ontimeCount = 0, lateCount = 0;
  all.forEach(p => {
    const v = deliveryVerdict(p);
    if (v === "early") earlyCount++;
    else if (v === "ontime") ontimeCount++;
    else if (v === "late") lateCount++;
  });
  const totalDelivered = earlyCount + ontimeCount + lateCount;

  const mostFrequentTeam = sortedTeams[0];
  const mostFrequentContact = sortedContacts[0];

  const recentWithStakeholder = [...all]
    .filter(p => (p.stakeholders || []).length > 0 && p.createdAt)
    .sort((a, b) => b.createdAt - a.createdAt);
  const mostRecentProject = recentWithStakeholder[0];
  const mostRecentLabel = mostRecentProject
    ? (mostRecentProject.stakeholders || []).map(formatStakeholder).filter(Boolean).join(", ")
    : null;

  function formatAgo(ts) {
    const diff = Math.floor((Date.now() - ts) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "today";
    if (diff === 1) return "yesterday";
    if (diff < 7) return `${diff}d ago`;
    if (diff < 30) return `${Math.floor(diff / 7)}w ago`;
    if (diff < 365) return `${Math.floor(diff / 30)}mo ago`;
    return new Date(ts).toLocaleDateString();
  }

  return (
    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-xl mb-6 overflow-hidden">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-900/40 transition text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <div className="font-semibold">Analytics</div>
            <div className="text-xs text-zinc-400">Patterns and progress over time</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          {collapsed ? "Show" : "Hide"}
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 space-y-6 border-t border-zinc-800/50 pt-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <BigStat icon={Briefcase} label="Total Projects" value={totalProjects} accent="zinc" />
            <BigStat icon={Award} label="Completed" value={totalCompleted} accent="emerald" />
            <BigStat icon={Activity} label="Active Now" value={activeNow} accent="violet" />
            <BigStat icon={Timer} label="Hours Logged" value={`${totalLogged}h`} accent="sky" subtitle="across all projects" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div>
              <h3 className="text-[11px] font-semibold text-zinc-400 mb-2.5 uppercase tracking-wider">
                Status Breakdown
              </h3>
              <div className="space-y-1.5 bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                {STATUSES.map(s => (
                  <BreakdownBar
                    key={s.id}
                    label={s.label}
                    count={statusCounts[s.id]}
                    max={maxStatus}
                    barClass={s.bar}
                    dotClass={s.dot}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold text-zinc-400 mb-2.5 uppercase tracking-wider">
                Project Type Breakdown
              </h3>
              <div className="space-y-1.5 bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                {sortedTypes.length === 0 ? (
                  <p className="text-xs text-zinc-600 italic">No projects yet</p>
                ) : sortedTypes.map(([type, count]) => (
                  <BreakdownBar
                    key={type}
                    label={type}
                    count={count}
                    max={maxType}
                    barClass="bg-green-500"
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold text-zinc-400 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3 h-3" /> Team Breakdown
                <span className="text-zinc-600 normal-case font-normal tracking-normal text-[10px]">(by team, not individual)</span>
              </h3>
              <div className="space-y-1.5 bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                {sortedTeams.length === 0 ? (
                  <p className="text-xs text-zinc-600 italic">No teams assigned yet</p>
                ) : sortedTeams.map(([team, count]) => (
                  <BreakdownBar
                    key={team}
                    label={team}
                    count={count}
                    max={maxTeam}
                    barClass="bg-sky-500"
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-zinc-400 mb-2.5 uppercase tracking-wider">
              Delivery Performance
            </h3>
            {totalDelivered === 0 ? (
              <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                <p className="text-xs text-zinc-600 italic">No delivered projects yet to score.</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                <DeliveryStat label="Early" count={earlyCount} total={totalDelivered} accent="emerald" />
                <DeliveryStat label="On Time" count={ontimeCount} total={totalDelivered} accent="emerald" />
                <DeliveryStat label="Late" count={lateCount} total={totalDelivered} accent="rose" />
              </div>
            )}
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-zinc-400 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3 h-3" /> Clients & Stakeholders
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <StakeholderCard
                label="Most Frequent Team"
                primary={mostFrequentTeam?.[0]}
                secondary={mostFrequentTeam ? `${mostFrequentTeam[1]} project${mostFrequentTeam[1] === 1 ? "" : "s"}` : null}
              />
              <StakeholderCard
                label="Most Frequent Contact"
                primary={mostFrequentContact?.[0]}
                secondary={mostFrequentContact ? `${mostFrequentContact[1]} project${mostFrequentContact[1] === 1 ? "" : "s"}` : null}
              />
              <StakeholderCard
                label="Most Recent"
                primary={mostRecentLabel}
                secondary={mostRecentProject ? `Last engaged ${formatAgo(mostRecentProject.createdAt)}` : null}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BigStat({ icon: Icon, label, value, accent, subtitle }) {
  const accents = {
    zinc: "text-zinc-300",
    emerald: "text-emerald-300",
    violet: "text-violet-300",
    sky: "text-sky-300",
  };
  return (
    <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
      <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 uppercase tracking-wider mb-1">
        <Icon className="w-3 h-3" />
        {label}
      </div>
      <div className={`text-2xl font-bold ${accents[accent] || "text-zinc-200"}`}>{value}</div>
      {subtitle && <div className="text-[10px] text-zinc-600 mt-0.5">{subtitle}</div>}
    </div>
  );
}

function BreakdownBar({ label, count, max, barClass, dotClass }) {
  const pct = max > 0 ? (count / max) * 100 : 0;
  return (
    <div className="flex items-center gap-2 text-xs">
      {dotClass && <span className={`w-1.5 h-1.5 rounded-full ${dotClass} flex-shrink-0`}></span>}
      <span className="text-zinc-400 w-36 truncate flex-shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-zinc-800/70 rounded-full overflow-hidden">
        <div
          className={`h-full ${barClass} transition-all`}
          style={{ width: `${pct}%`, minWidth: count > 0 ? "4px" : "0" }}
        ></div>
      </div>
      <span className="text-zinc-300 w-6 text-right tabular-nums flex-shrink-0">{count}</span>
    </div>
  );
}

function DeliveryStat({ label, count, total, accent }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  const accents = {
    emerald: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    rose: "bg-rose-500/10 border-rose-500/30 text-rose-300",
  };
  return (
    <div className={`rounded-lg p-3 border ${accents[accent]}`}>
      <div className="text-[11px] uppercase tracking-wider opacity-80">{label}</div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-bold">{count}</span>
        <span className="text-xs opacity-70">{pct}%</span>
      </div>
      <div className="h-1 bg-black/30 rounded-full mt-2 overflow-hidden">
        <div className="h-full bg-current opacity-70" style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  );
}

function StakeholderCard({ label, primary, secondary }) {
  return (
    <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
      <div className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">{label}</div>
      {primary ? (
        <>
          <div className="font-semibold truncate" title={primary}>{primary}</div>
          {secondary && <div className="text-xs text-zinc-400 mt-0.5">{secondary}</div>}
        </>
      ) : (
        <div className="text-sm text-zinc-600 italic">None recorded</div>
      )}
    </div>
  );
}

function ConfirmModal({ title, message, confirmLabel, onConfirm, onCancel, danger }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={onCancel}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start gap-3 mb-5">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${danger ? "bg-rose-500/20" : "bg-green-500/20"}`}>
            <AlertTriangle className={`w-5 h-5 ${danger ? "text-rose-400" : "text-green-400"}`} />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-zinc-400 mt-1">{message}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={onCancel} className="flex-1 px-4 py-2 rounded-lg text-sm font-medium border border-zinc-800 hover:bg-zinc-800 transition">
            Cancel
          </button>
          <button onClick={onConfirm} className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium text-white transition ${danger ? "bg-rose-500 hover:bg-rose-400" : "bg-green-500 hover:bg-green-400"}`}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function FormModal({ form, setForm, editingId, onClose, onSubmit, stakeholderDB }) {
  const invalidRange = form.startDate && form.deadline && new Date(form.startDate) > new Date(form.deadline);

  function addStakeholder() {
    setForm({ ...form, stakeholders: [...(form.stakeholders || []), { team: "", name: "" }] });
  }

  function updateStakeholder(idx, field, value) {
    setForm({
      ...form,
      stakeholders: (form.stakeholders || []).map((s, i) => i === idx ? { ...s, [field]: value } : s),
    });
  }

  function removeStakeholder(idx) {
    setForm({
      ...form,
      stakeholders: (form.stakeholders || []).filter((_, i) => i !== idx),
    });
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <datalist id="team-suggestions">
          {stakeholderDB.teams.map(t => <option key={t} value={t} />)}
        </datalist>
        <datalist id="contact-suggestions">
          {stakeholderDB.contacts.map(c => <option key={c} value={c} />)}
        </datalist>

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold">{editingId ? "Edit Project" : "New Project"}</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-zinc-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">Project Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g., Brand Motion Guidelines v2"
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-400 mb-2 flex items-center gap-1.5">
              <Users className="w-3 h-3" /> Stakeholders
            </label>
            <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-lg p-3 space-y-2">
              {(form.stakeholders || []).length === 0 ? (
                <p className="text-xs text-zinc-600 italic py-1">No stakeholders yet. Add one below.</p>
              ) : (
                <>
                  <div className="flex gap-2 text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">
                    <div className="flex-1">Team</div>
                    <div className="flex-1">Name</div>
                    <div className="w-7"></div>
                  </div>
                  {(form.stakeholders || []).map((s, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <input
                        type="text"
                        list="team-suggestions"
                        value={s.team}
                        onChange={(e) => updateStakeholder(idx, "team", e.target.value)}
                        placeholder="e.g., Brand"
                        className="flex-1 px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm focus:outline-none focus:border-green-500 min-w-0"
                        autoComplete="off"
                      />
                      <input
                        type="text"
                        list="contact-suggestions"
                        value={s.name}
                        onChange={(e) => updateStakeholder(idx, "name", e.target.value)}
                        placeholder="e.g., Sarah"
                        className="flex-1 px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm focus:outline-none focus:border-green-500 min-w-0"
                        autoComplete="off"
                      />
                      <button
                        type="button"
                        onClick={() => removeStakeholder(idx)}
                        className="w-7 h-8 flex items-center justify-center rounded-md text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition flex-shrink-0"
                        title="Remove stakeholder"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </>
              )}
              <button
                type="button"
                onClick={addStakeholder}
                className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 pt-1 transition"
              >
                <Plus className="w-3 h-3" />
                Add team member
              </button>
              {(stakeholderDB.teams.length > 0 || stakeholderDB.contacts.length > 0) && (
                <p className="text-[10px] text-zinc-600 italic">
                  Start typing in any field to see suggestions from previous projects.
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-green-500"
              >
                {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1">
                <Timer className="w-3 h-3" /> Est. Total Hours
              </label>
              <input
                type="number" min="0" step="0.5"
                value={form.estimatedHours}
                onChange={(e) => setForm({ ...form, estimatedHours: e.target.value })}
                placeholder="e.g., 20"
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-green-500"
              >
                {STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">Priority</label>
              <select
                value={form.priority}
                onChange={(e) => setForm({ ...form, priority: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-green-500"
              >
                {PRIORITIES.map(pr => <option key={pr.id} value={pr.id}>{pr.label}</option>)}
              </select>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Start Date</label>
                <input
                  type="date"
                  value={form.startDate}
                  max={form.deadline || undefined}
                  onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Deadline</label>
                <input
                  type="date"
                  value={form.deadline}
                  min={form.startDate || undefined}
                  onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
            {invalidRange && (
              <p className="text-xs text-amber-400 mt-1.5 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Start date is after the deadline
              </p>
            )}
          </div>

          {form.status === "delivered" && (
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">Delivered On</label>
              <input
                type="date"
                value={form.deliveredAt}
                onChange={(e) => setForm({ ...form, deliveredAt: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-green-500"
              />
              <p className="text-xs text-zinc-500 mt-1.5 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                Auto-set to today when moved to Delivered. Edit to record a different date.
              </p>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Brief notes, references, requirements..."
              rows={3}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-green-500 resize-none"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button onClick={onClose} className="flex-1 px-4 py-2 rounded-lg text-sm font-medium border border-zinc-800 hover:bg-zinc-800">
              Cancel
            </button>
            <button onClick={onSubmit} className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-green-500 hover:bg-green-400 text-white flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {editingId ? "Save Changes" : "Create Project"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
/* ========================================================================
   MOTION INTAKE FORM — integrated as a dashboard card + overlay modal.
   Self-contained inline-styled brass/dark aesthetic (kept from the original
   standalone form). On submit it logs the request and creates a Backlog
   project in the tracker via onSubmitRequest.
   ===================================================================== */

const IC = {
  bg: "#18181b", surface: "#0d0d0f", surface2: "#09090b",
  line: "#27272a", lineStrong: "#3f3f46",
  text: "#f4f4f5", muted: "#a1a1aa", faint: "#71717a",
  accent: "#22c55e", accentDim: "rgba(34,197,94,0.13)",
  error: "#fb7185", errorDim: "rgba(244,63,94,0.12)",
  display: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  body: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, 'Liberation Mono', monospace",
};

const INTAKE_PATHWAYS = {
  icon: { key: "icon", label: "Icon", weight: "Light", icon: Circle, needsPlatform: true,
    blurb: "Bring a single icon or asset to life.",
    phases: ["Brief", "Craft", "Deliver"], sections: ["icon"] },
  effect: { key: "effect", label: "Effect", weight: "Light", icon: Zap, needsPlatform: true,
    blurb: "Loaders, micro-interactions, ambient touches.",
    phases: ["Brief", "Explore", "Build", "Deliver"], sections: ["effect"] },
  transition: { key: "transition", label: "Transition", weight: "Standard", icon: ArrowRight, needsPlatform: true,
    blurb: "Move between two states or screens.",
    phases: ["Brief", "Explore", "Build", "Refine", "Deliver"], sections: ["trans-states", "trans-files"] },
  video: { key: "video", label: "Video", weight: "Standard", icon: Video, needsPlatform: true,
    blurb: "Motion graphics or a produced video.",
    phases: ["Brief", "Storyboard", "Animate", "Edit", "Deliver"], sections: ["video"] },
  signature: { key: "signature", label: "Signature Moment", weight: "Deep", icon: Star, needsPlatform: true,
    blurb: "A high-craft, brand-defining moment.",
    phases: ["Discovery", "Concept", "Design", "Build", "Align", "Deliver"], sections: ["sig-concept", "sig-craft"] },
  strategic: { key: "strategic", label: "Strategic Moment", weight: "Deep", icon: Target, needsPlatform: true,
    blurb: "Motion that carries a business objective.",
    phases: ["Discovery", "Align", "Concept", "Build", "Deliver"], sections: ["strat-intent", "strat-craft"] },
  experience: { key: "experience", label: "Experience", weight: "Deep", icon: Layers, needsPlatform: true,
    blurb: "Design motion across an entire flow.",
    phases: ["Discovery", "Define", "Design", "Build", "Align", "Deliver"], sections: ["exp-scope", "exp-outcomes", "exp-handoff"] },
  system: { key: "system", label: "Motion System", weight: "Deep", icon: Boxes, needsPlatform: false,
    blurb: "Reusable motion guidelines and tokens.",
    phases: ["Audit", "Define", "Systemize", "Document", "Roll out"], sections: ["sys-scope", "sys-docs"] },
};

const INTAKE_PLATFORMS = ["iOS", "Mobile", "Desktop", "Android", "Retail"];
const INTAKE_FEELS = ["Snappy", "Smooth", "Playful", "Subtle", "Bold", "Premium"];
const INTAKE_HANDOFF = ["Lottie", "Native code", "Video", "After Effects", "GIF", "Undecided"];
const INTAKE_FORMATS = ["16:9", "9:16", "1:1", "Other"];
const INTAKE_DEFAULT_ROLES = ["Designer", "Design Manager", "Brand Collaborator"];
const INTAKE_DEFAULT_TEAMS = ["Brand", "UX Delivery", "UX Design"];
const INTAKE_ROLES_KEY = "motion-tracker:intakeRoles";
const INTAKE_TEAMS_KEY = "motion-tracker:intakeTeams";

const dedupeList = (arr) => {
  const seen = new Set(); const out = [];
  (arr || []).forEach((x) => { const t = (x || "").trim(); const k = t.toLowerCase(); if (t && !seen.has(k)) { seen.add(k); out.push(t); } });
  return out;
};

const IField = ({ label, hint, required, error, children }) => (
  <label style={{ display: "block", marginBottom: 18 }}>
    <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between",
      fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: IC.muted, fontFamily: IC.mono, marginBottom: 8 }}>
      <span>{label}{required && <span style={{ color: error ? IC.error : IC.accent, marginLeft: 5 }}>*</span>}</span>
      {error
        ? <span style={{ color: IC.error, textTransform: "none", letterSpacing: 0 }}>Required</span>
        : (hint && <span style={{ color: IC.faint, textTransform: "none", letterSpacing: 0 }}>{hint}</span>)}
    </span>
    {children}
    {error && <span style={{ display: "block", marginTop: 7, fontSize: 12, color: IC.error, fontFamily: IC.body, textTransform: "none", letterSpacing: 0 }}>This field is required.</span>}
  </label>
);
const iInputBase = {
  width: "100%", background: IC.surface2, border: `1px solid ${IC.line}`, borderRadius: 10,
  padding: "11px 13px", color: IC.text, fontSize: 14, fontFamily: IC.body, outline: "none",
  boxSizing: "border-box", transition: "border-color 160ms ease",
};
const IInput = ({ invalid, ...p }) => (
  <input {...p} style={{ ...iInputBase, ...(invalid ? { borderColor: IC.error } : null), ...(p.style || {}) }}
    onFocus={(e) => (e.target.style.borderColor = IC.lineStrong)}
    onBlur={(e) => (e.target.style.borderColor = invalid ? IC.error : IC.line)} />
);
const ITextarea = (p) => (
  <textarea {...p} rows={p.rows || 3} style={{ ...iInputBase, resize: "vertical", lineHeight: 1.5, ...(p.style || {}) }}
    onFocus={(e) => (e.target.style.borderColor = IC.lineStrong)} onBlur={(e) => (e.target.style.borderColor = IC.line)} />
);
const ISelect = ({ value, onChange, options, invalid }) => (
  <div style={{ position: "relative" }}>
    <select value={value} onChange={onChange}
      style={{ ...iInputBase, appearance: "none", cursor: "pointer", paddingRight: 34, ...(invalid ? { borderColor: IC.error } : null) }}>
      <option value="">Select…</option>
      {options.map((o) => <option key={o} value={o} style={{ background: IC.surface2 }}>{o}</option>)}
    </select>
    <ChevronRight size={15} style={{ position: "absolute", right: 12, top: "50%",
      transform: "translateY(-50%) rotate(90deg)", color: IC.muted, pointerEvents: "none" }} />
  </div>
);
const ICombo = ({ value, onChange, options, invalid, placeholder, listId }) => (
  <div style={{ position: "relative" }}>
    <input
      value={value}
      onChange={onChange}
      list={listId}
      autoComplete="off"
      placeholder={placeholder || "Select or type…"}
      style={{ ...iInputBase, paddingRight: 34, ...(invalid ? { borderColor: IC.error } : null) }}
      onFocus={(e) => (e.target.style.borderColor = IC.lineStrong)}
      onBlur={(e) => (e.target.style.borderColor = invalid ? IC.error : IC.line)}
    />
    <ChevronRight size={15} style={{ position: "absolute", right: 12, top: "50%",
      transform: "translateY(-50%) rotate(90deg)", color: IC.muted, pointerEvents: "none" }} />
    <datalist id={listId}>
      {options.map((o) => <option key={o} value={o} />)}
    </datalist>
  </div>
);
const IChip = ({ active, onClick, children }) => (
  <button type="button" onClick={onClick} style={{
    padding: "7px 13px", borderRadius: 999, fontSize: 13, cursor: "pointer", fontFamily: IC.body,
    border: `1px solid ${active ? IC.accent : IC.line}`, background: active ? IC.accentDim : "transparent",
    color: active ? IC.accent : IC.muted, transition: "all 140ms ease" }}>{children}</button>
);
const IChips = ({ options, sel, onToggle }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
    {options.map((x) => <IChip key={x} active={sel.includes(x)} onClick={() => onToggle(x)}>{x}</IChip>)}
  </div>
);
const IRow = ({ children }) => (
  <div className="intake-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>{children}</div>
);

const iHStyle = { fontFamily: IC.display, fontWeight: 600, fontSize: 22, color: IC.text, margin: "0 0 8px", letterSpacing: "-0.01em" };
const iPStyle = { color: IC.muted, fontSize: 13.5, lineHeight: 1.55, margin: 0, maxWidth: 520 };

function IntakeBlock({ eyebrow, title, sub, children, divider = true, status, forceOpen }) {
  const [open, setOpen] = useState(true);
  useEffect(() => { if (forceOpen) setOpen(true); }, [forceOpen]);
  const isOpen = forceOpen || open;
  return (
    <section style={{ paddingTop: divider ? 30 : 0, marginTop: divider ? 30 : 0, borderTop: divider ? `1px solid ${IC.line}` : "none" }}>
      <button type="button" aria-expanded={isOpen} onClick={() => setOpen((o) => !o)} style={{
        appearance: "none", background: "none", border: "none", padding: 0, margin: 0, width: "100%", textAlign: "left",
        cursor: "pointer", color: "inherit", display: "flex", alignItems: "center", gap: 12 }}>
        {eyebrow && <span style={{ fontFamily: IC.mono, fontSize: 12, color: IC.accent, letterSpacing: "0.05em" }}>{eyebrow}</span>}
        <h2 style={{ ...iHStyle, margin: 0 }}>{title}</h2>
        {status === "incomplete" && (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: IC.mono, fontSize: 10.5,
            letterSpacing: "0.06em", textTransform: "uppercase", color: IC.error }}>
            <AlertCircle size={13} /> Incomplete
          </span>
        )}
        <ChevronRight size={18} style={{ marginLeft: "auto", flexShrink: 0, color: IC.muted,
          transform: isOpen ? "rotate(90deg)" : "none", transition: "transform 200ms ease" }} />
      </button>
      {isOpen && (
        <div className="intake-reveal" style={{ marginTop: sub ? 8 : 18 }}>
          {sub && <p style={{ ...iPStyle, marginBottom: 20 }}>{sub}</p>}
          {children}
        </div>
      )}
    </section>
  );
}

const intakeNorm = (v) => Array.isArray(v) ? v.join(", ") : (typeof v === "boolean" ? (v ? "Yes" : "No") : (v || ""));

function buildIntakeSummary(f, collabs, p) {
  const detailMap = {
    icon: [["Asset", f.iconAsset], ["Where it lives", f.iconSurface], ["Asset link", f.iconLink], ["Feel", f.iconFeels], ["Reference", f.iconRef]],
    effect: [["Effect", f.fxWhat], ["Where it appears", f.fxWhere], ["Trigger", f.fxTrigger], ["Feel", f.fxFeels], ["Reference", f.fxRef]],
    transition: [["From state", f.fromState], ["To state", f.toState], ["Trigger", f.trigger], ["Screens", f.screens], ["Design file", f.transFile], ["Reference", f.transRef]],
    video: [["Purpose", f.vidPurpose], ["Length", f.vidLength], ["Aspect ratio", f.vidFormat], ["Script / storyboard", f.vidScript], ["Reference", f.vidRef]],
    signature: [["The moment", f.sigMoment], ["Where in journey", f.sigWhere], ["Emotional goal", f.sigEmotion], ["Fidelity", f.sigFidelity], ["Handoff", f.sigHandoff], ["Stakeholders", f.sigStakeholders], ["Reference", f.sigRef]],
    strategic: [["Objective", f.stratObjective], ["Where it lives", f.stratWhere], ["Success metric", f.stratMetric], ["Fidelity", f.stratFidelity], ["Stakeholders", f.stratStakeholders], ["Reference", f.stratRef]],
    experience: [["Scope", f.scope], ["Key screens", f.keyScreens], ["User journey", f.journey], ["Success criteria", f.success], ["Discovery phase", f.discovery], ["Handoff", f.handoff], ["Stakeholders", f.stakeholders], ["Reference", f.expRef]],
    system: [["Covers", f.sysCovers], ["Components / tokens", f.sysComponents], ["Principles", f.sysPrinciples], ["Format", f.sysFormat], ["Docs location", f.sysDocs], ["Stakeholders", f.sysStakeholders]],
  };
  const basics = [
    ["Project", f.project],
    ["Requestor", [f.reqName, f.reqRole].filter(Boolean).join(" · ")],
    ["Team", f.team],
    ["Priority", f.priority],
  ];
  if (p.needsPlatform) basics.push(["Platform", f.platforms]);
  basics.push(["Target date", f.deadline]);
  basics.push(["Collaborators", collabs.filter((c) => c.name).map((c) => c.name + (c.role ? ` (${c.role})` : "")).join(", ")]);
  const clean = (rows) => rows.map(([k, v]) => [k, intakeNorm(v)]).filter(([, v]) => v !== "");
  return [
    { title: "Basics", rows: clean(basics) },
    { title: "Details", rows: clean(detailMap[f.type] || []) },
  ];
}

// Map an intake request onto the dashboard's project shape (lands in Backlog).
function requestToProject(f, collabs, p) {
  const directType = { signature: "Signature Moment", strategic: "Strategic Moment", system: "Motion System" };
  const teamType = { "Brand": "Brand Team Enablement", "UX Delivery": "UX Delivery Team Enablement", "UX Design": "UX Design Team Enablement" };
  const type = directType[p.key] || teamType[f.team] || "UX Delivery Team Enablement";
  const priorityMap = { Low: "low", Medium: "medium", High: "high", Urgent: "high" };
  const priority = priorityMap[f.priority] || "medium";
  const stakeholders = [];
  if ((f.team || "").trim() || (f.reqName || "").trim()) {
    stakeholders.push({ team: (f.team || "").trim(), name: (f.reqName || "").trim() });
  }
  (collabs || []).forEach((c) => { if (c.name && c.name.trim()) stakeholders.push({ team: "", name: c.name.trim() }); });
  const lines = [`${p.label} · ${p.weight} · ${p.phases.join(" → ")}`];
  if (p.needsPlatform && f.platforms.length) lines.push(`Platform: ${f.platforms.join(", ")}`);
  const detail = buildIntakeSummary(f, collabs, p).find((s) => s.title === "Details");
  if (detail) detail.rows.forEach(([k, v]) => lines.push(`${k}: ${v}`));
  return {
    name: (f.project || "Untitled request").trim(),
    stakeholders, type, priority,
    deadline: f.deadline || "",
    notes: lines.join("\n"),
  };
}

function loadIntakeJsPDF() {
  return new Promise((resolve, reject) => {
    if (window.jspdf && window.jspdf.jsPDF) return resolve(window.jspdf.jsPDF);
    let s = document.getElementById("jspdf-cdn");
    if (s) { s.addEventListener("load", () => resolve(window.jspdf.jsPDF)); s.addEventListener("error", reject); return; }
    s = document.createElement("script");
    s.id = "jspdf-cdn";
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    s.onload = () => resolve(window.jspdf.jsPDF);
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function generateIntakeTicket(f, collabs, p, ticketId) {
  const JsPDF = await loadIntakeJsPDF();
  const doc = new JsPDF({ unit: "mm", format: [148, 210] });
  const W = 148, H = 210, M = 14, CW = W - M * 2;
  const ink = [26, 26, 24], gray = [120, 120, 114], brass = [22, 163, 74], faint = [225, 230, 225];

  doc.setFillColor(...brass); doc.rect(0, 0, W, 4, "F");
  let y = 16;
  doc.setFont("courier", "normal"); doc.setFontSize(7.5); doc.setTextColor(...gray);
  doc.text("MOTION DESIGN · UX", M, y);
  doc.setTextColor(...brass); doc.text(ticketId, W - M, y, { align: "right" });

  y += 12;
  doc.setFont("helvetica", "bold"); doc.setFontSize(20); doc.setTextColor(...ink);
  const titleLines = doc.splitTextToSize(f.project || "Untitled request", CW);
  doc.text(titleLines, M, y); y += titleLines.length * 8 + 2;

  doc.setFont("courier", "bold"); doc.setFontSize(8);
  const badge = `${p.label.toUpperCase()} · ${p.weight.toUpperCase()}`;
  const bw = doc.getTextWidth(badge) + 8;
  doc.setFillColor(223, 246, 231); doc.roundedRect(M, y - 4.2, bw, 6.4, 1.4, 1.4, "F");
  doc.setTextColor(...brass); doc.text(badge, M + 4, y); y += 10;

  doc.setDrawColor(...faint); doc.line(M, y, W - M, y); y += 7;
  doc.setFont("courier", "normal"); doc.setFontSize(7.5); doc.setTextColor(...gray); doc.text("PROCESS", M, y);
  doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...ink);
  const phaseLines = doc.splitTextToSize(p.phases.join("  ->  "), CW - 26);
  doc.text(phaseLines, M + 26, y);
  y += Math.max(phaseLines.length * 4.6, 5) + 3;
  doc.setDrawColor(...faint); doc.line(M, y, W - M, y); y += 9;

  const sections = buildIntakeSummary(f, collabs, p);
  const KW = 40;
  const ensureSpace = (need) => { if (y + need > H - 22) { doc.addPage(); doc.setFillColor(...brass); doc.rect(0, 0, W, 4, "F"); y = 18; } };

  sections.forEach((sec) => {
    if (!sec.rows.length) return;
    ensureSpace(12);
    doc.setFont("courier", "bold"); doc.setFontSize(7.5); doc.setTextColor(...brass);
    doc.text(sec.title.toUpperCase(), M, y); y += 5.5;
    sec.rows.forEach(([k, v]) => {
      doc.setFont("helvetica", "normal"); doc.setFontSize(8.5);
      const vLines = doc.splitTextToSize(String(v), CW - KW);
      const need = Math.max(vLines.length * 4.4, 4.4) + 1.5;
      ensureSpace(need);
      doc.setTextColor(...gray); doc.text(k, M, y);
      doc.setTextColor(...ink); doc.text(vLines, M + KW, y);
      y += need;
    });
    y += 4;
  });

  ensureSpace(20);
  y = Math.max(y, H - 20);
  doc.setLineDashPattern([1, 1], 0); doc.setDrawColor(...gray); doc.line(M, y, W - M, y);
  doc.setLineDashPattern([], 0); y += 6;
  doc.setFont("courier", "normal"); doc.setFontSize(7); doc.setTextColor(...gray);
  const submitted = new Date().toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  doc.text(`SUBMITTED ${submitted.toUpperCase()}`, M, y);
  doc.text("AWAITING REVIEW", W - M, y, { align: "right" });

  doc.save(`motion-ticket-${ticketId}.pdf`);
}

const intakeGhostBtn = {
  background: "transparent", border: `1px solid ${IC.line}`, color: IC.muted,
  padding: "11px 18px", borderRadius: 10, cursor: "pointer", fontSize: 13.5, fontFamily: IC.body,
};

// ---- Dashboard card (matches Daily Briefing / Link Manager pattern) ----
function IntakeCard({ requests, requestHandlers, onOpen }) {
  const [collapsed, setCollapsed] = useState(false);

  function reDownload(r) {
    const p = INTAKE_PATHWAYS[r.typeKey];
    if (!p) return;
    generateIntakeTicket(r.f, r.collabs, p, r.id).catch(() => {});
  }

  function fmtWhen(ts) {
    if (!ts) return "";
    return new Date(ts).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  return (
    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-xl mb-6 overflow-hidden">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-900/40 transition text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <Inbox className="w-4 h-4 text-green-400" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold">Intake Form</div>
            <div className="text-xs text-zinc-400 truncate">
              {requests.length === 0
                ? "Submit a new motion request"
                : `${requests.length} request${requests.length === 1 ? "" : "s"} submitted`}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 flex-shrink-0 ml-2">
          {collapsed ? "Show" : "Hide"}
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 border-t border-zinc-800/50 pt-4 space-y-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              Share the intake form with designers, managers, and brand partners to submit motion requests.
              Each submission generates a ticket and lands in your tracker as a Backlog project.
            </p>
            <button
              onClick={onOpen}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-green-500 hover:bg-green-400 text-white flex items-center gap-2 transition flex-shrink-0"
            >
              <Plus className="w-4 h-4" />
              Open intake form
            </button>
          </div>

          {requests.length > 0 && (
            <div>
              <h3 className="text-[11px] font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Submitted Requests</h3>
              <div className="space-y-2">
                {requests.map((r) => (
                  <div key={r.id} className="flex items-center gap-3 bg-zinc-950/50 border border-zinc-800/50 rounded-lg px-3 py-2.5">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-sm text-zinc-200 truncate">{r.project?.name || "Untitled request"}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/15 text-green-300 font-semibold uppercase tracking-wider">
                          {r.typeLabel} · {r.weight}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-500 mt-0.5 flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-zinc-400">{r.id}</span>
                        <span>·</span>
                        <span>{fmtWhen(r.submittedAt)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => reDownload(r)}
                      className="p-1.5 rounded-md text-zinc-500 hover:text-green-300 hover:bg-zinc-800 transition flex-shrink-0"
                      title="Download PDF ticket"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => requestHandlers.removeRequest(r.id)}
                      className="p-1.5 rounded-md text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition flex-shrink-0"
                      title="Remove from list"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-zinc-600 italic mt-2">
                Removing a request here won't delete the project it created in your tracker.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---- The full intake form, rendered inside an overlay modal ----
function IntakeModal({ onClose, onSubmitRequest }) {
  const [f, setF] = useState({
    project: "", reqName: "", reqRole: "", team: "", deadline: "", priority: "", type: "", platforms: [],
    iconAsset: "", iconLink: "", iconSurface: "", iconFeels: [], iconRef: "",
    fxWhat: "", fxWhere: "", fxTrigger: "", fxFeels: [], fxRef: "",
    fromState: "", toState: "", trigger: "", transFile: "", screens: "", transRef: "",
    vidPurpose: "", vidLength: "", vidFormat: [], vidScript: "", vidRef: "",
    sigMoment: "", sigWhere: "", sigEmotion: "", sigFidelity: "", sigHandoff: [], sigStakeholders: "", sigRef: "",
    stratObjective: "", stratWhere: "", stratMetric: "", stratFidelity: "", stratStakeholders: "", stratRef: "",
    scope: "", keyScreens: "", journey: "", success: "", discovery: false, handoff: [], stakeholders: "", expRef: "",
    sysCovers: "", sysComponents: "", sysPrinciples: "", sysFormat: [], sysDocs: "", sysStakeholders: "",
  });
  const [collabs, setCollabs] = useState([{ name: "", role: "" }]);
  const [done, setDone] = useState(false);
  const [ticket, setTicket] = useState("");
  const [pdfState, setPdfState] = useState("idle");
  const [attempted, setAttempted] = useState(false);
  const [step, setStep] = useState(0);
  const [maxReached, setMaxReached] = useState(0);
  const [customRoles, setCustomRoles] = useState([]);
  const [customTeams, setCustomTeams] = useState([]);
  const basicsRef = useRef(null);
  const scrollRef = useRef(null);

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e?.target ? e.target.value : e }));
  const toggleIn = (k) => (v) => setF((s) => ({ ...s, [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v] }));

  useEffect(() => {
    loadIntakeJsPDF().catch(() => {});
    (async () => {
      try {
        const r = await window.storage.get(INTAKE_ROLES_KEY);
        if (r && r.value) { const a = JSON.parse(r.value); if (Array.isArray(a)) setCustomRoles(a); }
      } catch (e) {}
      try {
        const t = await window.storage.get(INTAKE_TEAMS_KEY);
        if (t && t.value) { const a = JSON.parse(t.value); if (Array.isArray(a)) setCustomTeams(a); }
      } catch (e) {}
    })();
  }, []);

  const roleOptions = dedupeList([...INTAKE_DEFAULT_ROLES, ...customRoles]);
  const teamOptions = dedupeList([...INTAKE_DEFAULT_TEAMS, ...customTeams]);

  // Persist a freshly-typed role/team so it's an option in future sessions.
  function rememberChoices() {
    const role = (f.reqRole || "").trim();
    const team = (f.team || "").trim();
    if (role && !roleOptions.some((o) => o.toLowerCase() === role.toLowerCase())) {
      const next = dedupeList([...customRoles, role]);
      setCustomRoles(next);
      try { window.storage.set(INTAKE_ROLES_KEY, JSON.stringify(next)); } catch (e) {}
    }
    if (team && !teamOptions.some((o) => o.toLowerCase() === team.toLowerCase())) {
      const next = dedupeList([...customTeams, team]);
      setCustomTeams(next);
      try { window.storage.set(INTAKE_TEAMS_KEY, JSON.stringify(next)); } catch (e) {}
    }
  }

  const p = f.type ? INTAKE_PATHWAYS[f.type] : null;
  const showErr = (k) => attempted && !f[k];
  const basicsOk = f.project && f.reqName && f.reqRole;
  const basicsIncomplete = attempted && !basicsOk;
  const ready = basicsOk && f.type;

  const STEPS = ["Type", "Basics", "Details", "Review"];

  // A step is reachable only when everything before it is satisfied.
  function stepUnlocked(i) {
    if (i >= 1 && !f.type) return false;
    if (i >= 2 && !basicsOk) return false;
    if (i >= 3 && !basicsOk) return false;
    return true;
  }

  const scrollTop = () => { if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: "smooth" }); };

  function goToStep(i) {
    if (i < 0 || i >= STEPS.length) return;
    if (i > maxReached) return;        // can't skip ahead past where you've been
    if (!stepUnlocked(i)) return;      // guards if an earlier field was cleared
    setStep(i);
    scrollTop();
  }

  function goBack() {
    if (step > 0) { setStep(step - 1); scrollTop(); }
  }

  function goNext() {
    if (step === 0 && !f.type) { setAttempted(true); return; }
    if (step === 1 && !basicsOk) {
      setAttempted(true);
      if (basicsRef.current) basicsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (step === 1) rememberChoices();
    const n = Math.min(step + 1, STEPS.length - 1);
    setStep(n);
    setMaxReached((m) => Math.max(m, n));
    scrollTop();
  }

  const submit = () => {
    if (!ready) { setAttempted(true); return; }
    rememberChoices();
    const ticketId = `MTN-${Date.now().toString(36).slice(-5).toUpperCase()}`;
    setTicket(ticketId);
    setDone(true);
    scrollTop();
    const record = {
      id: ticketId,
      typeKey: p.key,
      typeLabel: p.label,
      weight: p.weight,
      submittedAt: Date.now(),
      f: { ...f },
      collabs: collabs.map((c) => ({ ...c })),
      project: requestToProject(f, collabs, p),
    };
    if (onSubmitRequest) onSubmitRequest(record);
  };
  const downloadPdf = async () => {
    setPdfState("working");
    try { await generateIntakeTicket(f, collabs, p, ticket); setPdfState("idle"); }
    catch { setPdfState("error"); }
  };

  const detail = (id) => {
    switch (id) {
      case "icon": return (
        <IntakeBlock key={id} eyebrow="03" title="Icon details" sub="The light path — just the essentials.">
          <IRow>
            <IField label="Which icon / asset"><IInput value={f.iconAsset} onChange={set("iconAsset")} placeholder="e.g. Wishlist heart" /></IField>
            <IField label="Where it lives"><IInput value={f.iconSurface} onChange={set("iconSurface")} placeholder="Surface / screen" /></IField>
          </IRow>
          <IField label="Asset link" hint="Figma / file URL"><IInput value={f.iconLink} onChange={set("iconLink")} placeholder="https://" /></IField>
          <IField label="Desired feel"><IChips options={INTAKE_FEELS} sel={f.iconFeels} onToggle={toggleIn("iconFeels")} /></IField>
          <IField label="Reference" hint="optional"><IInput value={f.iconRef} onChange={set("iconRef")} placeholder="Link to anything inspiring" /></IField>
        </IntakeBlock>
      );
      case "effect": return (
        <IntakeBlock key={id} eyebrow="03" title="Effect details" sub="Loaders, micro-interactions, ambient touches.">
          <IRow>
            <IField label="What effect"><IInput value={f.fxWhat} onChange={set("fxWhat")} placeholder="e.g. Pull-to-refresh, loader" /></IField>
            <IField label="Where it appears"><IInput value={f.fxWhere} onChange={set("fxWhere")} placeholder="Surface / screen" /></IField>
          </IRow>
          <IField label="Trigger"><ISelect value={f.fxTrigger} onChange={set("fxTrigger")} options={["Load", "Tap", "Scroll", "Hover", "Idle / ambient", "State change"]} /></IField>
          <IField label="Desired feel"><IChips options={INTAKE_FEELS} sel={f.fxFeels} onToggle={toggleIn("fxFeels")} /></IField>
          <IField label="Reference" hint="optional"><IInput value={f.fxRef} onChange={set("fxRef")} placeholder="Link to anything inspiring" /></IField>
        </IntakeBlock>
      );
      case "trans-states": return (
        <IntakeBlock key={id} eyebrow="03" title="States & trigger" sub="What moves, and what sets it off.">
          <IRow>
            <IField label="From state"><IInput value={f.fromState} onChange={set("fromState")} placeholder="Starting screen / state" /></IField>
            <IField label="To state"><IInput value={f.toState} onChange={set("toState")} placeholder="Ending screen / state" /></IField>
          </IRow>
          <IField label="Trigger"><ISelect value={f.trigger} onChange={set("trigger")} options={["Tap", "Scroll", "Load", "Hover", "Gesture", "State change"]} /></IField>
          <IField label="Screens / components involved"><IInput value={f.screens} onChange={set("screens")} placeholder="Name the pieces in play" /></IField>
        </IntakeBlock>
      );
      case "trans-files": return (
        <IntakeBlock key={id} eyebrow="04" title="Files & reference" sub="What to build from.">
          <IField label="Design file link" hint="Figma / prototype"><IInput value={f.transFile} onChange={set("transFile")} placeholder="https://" /></IField>
          <IField label="Reference" hint="optional"><IInput value={f.transRef} onChange={set("transRef")} placeholder="Link to anything inspiring" /></IField>
        </IntakeBlock>
      );
      case "video": return (
        <IntakeBlock key={id} eyebrow="03" title="Video details" sub="Format, length, and what it's for.">
          <IField label="Purpose"><ITextarea value={f.vidPurpose} onChange={set("vidPurpose")} placeholder="What's this video for, and where does it run?" /></IField>
          <IRow>
            <IField label="Target length"><ISelect value={f.vidLength} onChange={set("vidLength")} options={["Under 15s", "15–30s", "30–60s", "60s+"]} /></IField>
            <IField label="Aspect ratio"><div style={{ paddingTop: 4 }}><IChips options={INTAKE_FORMATS} sel={f.vidFormat} onToggle={toggleIn("vidFormat")} /></div></IField>
          </IRow>
          <IField label="Script / storyboard link" hint="optional"><IInput value={f.vidScript} onChange={set("vidScript")} placeholder="https://" /></IField>
          <IField label="Reference" hint="optional"><IInput value={f.vidRef} onChange={set("vidRef")} placeholder="Link to anything inspiring" /></IField>
        </IntakeBlock>
      );
      case "sig-concept": return (
        <IntakeBlock key={id} eyebrow="03" title="The moment" sub="Signature moments earn discovery — set the intent here.">
          <IField label="What's the moment"><ITextarea value={f.sigMoment} onChange={set("sigMoment")} placeholder="Describe the moment we're crafting" /></IField>
          <IField label="Where it lives in the journey"><IInput value={f.sigWhere} onChange={set("sigWhere")} placeholder="The point in the flow" /></IField>
          <IField label="Emotional goal"><IInput value={f.sigEmotion} onChange={set("sigEmotion")} placeholder="How should it feel?" /></IField>
        </IntakeBlock>
      );
      case "sig-craft": return (
        <IntakeBlock key={id} eyebrow="04" title="Craft & alignment" sub="Fidelity, handoff, and who signs off.">
          <IField label="Target fidelity"><ISelect value={f.sigFidelity} onChange={set("sigFidelity")} options={["Concept / exploration", "Polished prototype", "Production-ready"]} /></IField>
          <IField label="Handoff format"><IChips options={INTAKE_HANDOFF} sel={f.sigHandoff} onToggle={toggleIn("sigHandoff")} /></IField>
          <IField label="Stakeholders to align with"><IInput value={f.sigStakeholders} onChange={set("sigStakeholders")} placeholder="Who needs to sign off?" /></IField>
          <IField label="Reference & research" hint="optional"><IInput value={f.sigRef} onChange={set("sigRef")} placeholder="https://" /></IField>
        </IntakeBlock>
      );
      case "strat-intent": return (
        <IntakeBlock key={id} eyebrow="03" title="Strategic intent" sub="What this moment needs to move.">
          <IField label="Objective"><ITextarea value={f.stratObjective} onChange={set("stratObjective")} placeholder="What business or experience goal does this serve?" /></IField>
          <IField label="Where it lives"><IInput value={f.stratWhere} onChange={set("stratWhere")} placeholder="The surface or moment in the flow" /></IField>
          <IField label="Success metric"><IInput value={f.stratMetric} onChange={set("stratMetric")} placeholder="How will we know it worked?" /></IField>
        </IntakeBlock>
      );
      case "strat-craft": return (
        <IntakeBlock key={id} eyebrow="04" title="Craft & alignment" sub="Fidelity and who signs off.">
          <IField label="Target fidelity"><ISelect value={f.stratFidelity} onChange={set("stratFidelity")} options={["Concept / exploration", "Polished prototype", "Production-ready"]} /></IField>
          <IField label="Stakeholders to align with"><IInput value={f.stratStakeholders} onChange={set("stratStakeholders")} placeholder="Who needs to sign off?" /></IField>
          <IField label="Reference & research" hint="optional"><IInput value={f.stratRef} onChange={set("stratRef")} placeholder="https://" /></IField>
        </IntakeBlock>
      );
      case "exp-scope": return (
        <IntakeBlock key={id} eyebrow="03" title="Scope & journey" sub="The fuller the picture, the smoother discovery goes.">
          <IField label="Scope summary"><ITextarea value={f.scope} onChange={set("scope")} placeholder="What's the experience, and why does motion matter here?" /></IField>
          <IField label="Key screens / surfaces"><IInput value={f.keyScreens} onChange={set("keyScreens")} placeholder="The main moments involved" /></IField>
          <IField label="User journey / moment in the flow"><ITextarea value={f.journey} onChange={set("journey")} placeholder="Where does this sit in what the user is doing?" /></IField>
        </IntakeBlock>
      );
      case "exp-outcomes": return (
        <IntakeBlock key={id} eyebrow="04" title="Outcomes" sub="What good looks like, and how we get there.">
          <IField label="Success criteria"><ITextarea value={f.success} onChange={set("success")} placeholder="What does 'good' look like when this ships?" /></IField>
          <IField label="Needs a discovery phase?">
            <div style={{ display: "flex", gap: 8 }}>
              <IChip active={f.discovery} onClick={() => set("discovery")(true)}>Yes, explore first</IChip>
              <IChip active={!f.discovery} onClick={() => set("discovery")(false)}>No, direction is clear</IChip>
            </div>
          </IField>
        </IntakeBlock>
      );
      case "exp-handoff": return (
        <IntakeBlock key={id} eyebrow="05" title="Handoff & alignment" sub="How it lands, and who signs off.">
          <IField label="Handoff format"><IChips options={INTAKE_HANDOFF} sel={f.handoff} onToggle={toggleIn("handoff")} /></IField>
          <IField label="Stakeholders to align with"><IInput value={f.stakeholders} onChange={set("stakeholders")} placeholder="Who needs to sign off?" /></IField>
          <IField label="Reference & research" hint="optional"><IInput value={f.expRef} onChange={set("expRef")} placeholder="https://" /></IField>
        </IntakeBlock>
      );
      case "sys-scope": return (
        <IntakeBlock key={id} eyebrow="03" title="System scope" sub="What the system needs to cover.">
          <IField label="What it covers"><ITextarea value={f.sysCovers} onChange={set("sysCovers")} placeholder="Which surfaces, patterns, or products?" /></IField>
          <IField label="Components / tokens"><IInput value={f.sysComponents} onChange={set("sysComponents")} placeholder="Durations, easings, patterns to define" /></IField>
          <IField label="Guiding principles"><ITextarea value={f.sysPrinciples} onChange={set("sysPrinciples")} placeholder="Any motion principles to anchor on?" /></IField>
        </IntakeBlock>
      );
      case "sys-docs": return (
        <IntakeBlock key={id} eyebrow="04" title="Documentation & rollout" sub="How the system gets shared and adopted.">
          <IField label="Deliverable format"><IChips options={["Spec doc", "Figma library", "Lottie set", "Code tokens", "Guidelines site"]} sel={f.sysFormat} onToggle={toggleIn("sysFormat")} /></IField>
          <IField label="Where docs live"><IInput value={f.sysDocs} onChange={set("sysDocs")} placeholder="Link or location" /></IField>
          <IField label="Stakeholders to align with"><IInput value={f.sysStakeholders} onChange={set("sysStakeholders")} placeholder="Who needs to adopt it?" /></IField>
        </IntakeBlock>
      );
      default: return null;
    }
  };

  const sections = done ? buildIntakeSummary(f, collabs, p) : null;

  // Which detail-section header (eyebrow number) each step should start at.
  // Type=0, Basics=1, Details=2, Review=3.

  const stepContext = p ? `${p.label} · ${p.weight}` : null;

  const Stepper = () => (
    <div style={{ display: "flex", alignItems: "center", gap: 6, overflowX: "auto", paddingBottom: 2 }}>
      {STEPS.map((label, i) => {
        const active = i === step;
        const complete = i < maxReached && i !== step;
        const reachable = i <= maxReached && stepUnlocked(i);
        const dotBg = active ? IC.accent : complete ? IC.accentDim : IC.surface2;
        const dotColor = active ? "#fff" : complete ? IC.accent : IC.faint;
        const dotBorder = active ? IC.accent : complete ? IC.accent : IC.line;
        return (
          <React.Fragment key={label}>
            <button
              type="button"
              onClick={() => goToStep(i)}
              disabled={!reachable}
              style={{
                display: "flex", alignItems: "center", gap: 8, flexShrink: 0,
                background: "none", border: "none", padding: "4px 2px",
                cursor: reachable ? "pointer" : "default",
              }}
            >
              <span style={{
                width: 24, height: 24, borderRadius: 999, display: "grid", placeItems: "center",
                background: dotBg, color: dotColor, border: `1px solid ${dotBorder}`,
                fontFamily: IC.mono, fontSize: 11, fontWeight: 600, transition: "all 160ms ease",
                flexShrink: 0,
              }}>
                {complete ? <Check size={13} /> : i + 1}
              </span>
              <span style={{
                fontSize: 12.5, fontWeight: active ? 600 : 500,
                color: active ? IC.text : reachable ? IC.muted : IC.faint,
                whiteSpace: "nowrap", transition: "color 160ms ease",
              }}>{label}</span>
            </button>
            {i < STEPS.length - 1 && (
              <span style={{ flex: 1, minWidth: 16, height: 1, background: i < maxReached ? IC.accentDim : IC.line }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{ background: "rgba(0,0,0,0.72)" }}
      onClick={onClose}
    >
      <style>{`
        .intake-panel * { -webkit-font-smoothing: antialiased; }
        .intake-reveal { animation: intakeRise 300ms cubic-bezier(.2,.7,.2,1) both; }
        .intake-phase-node { animation: intakePop 360ms cubic-bezier(.2,.8,.2,1) both; }
        .intake-phase-line { transform-origin: left; animation: intakeGrow 360ms cubic-bezier(.4,0,.2,1) both; }
        @keyframes intakeRise { from {opacity:0; transform: translateY(8px);} to {opacity:1; transform:none;} }
        @keyframes intakePop { from {opacity:0; transform: translateY(8px) scale(.85);} to {opacity:1; transform:none;} }
        @keyframes intakeGrow { from {transform:scaleX(0); opacity:0;} to {transform:scaleX(1); opacity:1;} }
        @media (max-width: 560px){ .intake-row{ grid-template-columns:1fr !important; } }
        @media (prefers-reduced-motion: reduce){ .intake-reveal,.intake-phase-node,.intake-phase-line{ animation:none !important; } }
        .intake-panel input::placeholder, .intake-panel textarea::placeholder { color:${IC.faint}; }
        .intake-panel input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(.7); cursor:pointer; }
        .intake-panel select option { color:${IC.text}; }
      `}</style>

      <div
        ref={scrollRef}
        className="intake-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: IC.bg, color: IC.text, fontFamily: IC.body,
          border: `1px solid ${IC.line}`, borderRadius: 16,
          width: "100%", maxWidth: 720, maxHeight: "92vh", overflowY: "auto",
          alignSelf: "center", position: "relative",
        }}
      >
        {/* Sticky header: title + stepper stay visible while the step body scrolls */}
        <div style={{
          position: "sticky", top: 0, zIndex: 6, background: IC.bg,
          borderBottom: `1px solid ${IC.line}`, padding: "18px 22px 14px",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: done ? 0 : 14 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <Sparkles size={14} color={IC.accent} />
                <span style={{ fontFamily: IC.mono, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: IC.muted }}>Motion Design · UX</span>
                {stepContext && !done && (
                  <span style={{ fontFamily: IC.mono, fontSize: 10.5, color: IC.accent, letterSpacing: "0.04em" }}>· {stepContext}</span>
                )}
              </div>
              <h1 style={{ fontFamily: IC.display, fontWeight: 700, fontSize: 22, lineHeight: 1.1, margin: 0, letterSpacing: "-0.01em" }}>
                {done ? "Request received" : "Request motion work"}
              </h1>
            </div>
            <button
              type="button" onClick={onClose} aria-label="Close intake form"
              style={{
                width: 32, height: 32, borderRadius: 9, cursor: "pointer", flexShrink: 0,
                background: IC.surface2, border: `1px solid ${IC.line}`, color: IC.muted,
                display: "grid", placeItems: "center",
              }}
            >
              <X size={15} />
            </button>
          </div>
          {!done && <Stepper />}
        </div>

        <div style={{ padding: "24px 22px 26px" }}>
          {done ? (
            <div className="intake-reveal">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div style={{ width: 34, height: 34, borderRadius: 999, background: IC.accentDim, display: "grid", placeItems: "center" }}>
                  <Check size={18} color={IC.accent} />
                </div>
                <div>
                  <div style={{ fontFamily: IC.display, fontWeight: 600, fontSize: 18 }}>Added to your tracker</div>
                  <div style={{ fontFamily: IC.mono, fontSize: 11, color: IC.muted, letterSpacing: "0.05em" }}>{ticket} · Backlog · awaiting review</div>
                </div>
              </div>

              <div style={{ border: `1px solid ${IC.line}`, borderRadius: 14, overflow: "hidden", background: IC.surface }}>
                <div style={{ height: 4, background: IC.accent }} />
                <div style={{ padding: "22px 22px 8px" }}>
                  <h2 style={{ fontFamily: IC.display, fontWeight: 700, fontSize: 22, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{f.project}</h2>
                  <span style={{ display: "inline-block", fontFamily: IC.mono, fontSize: 11, letterSpacing: "0.06em",
                    color: IC.accent, background: IC.accentDim, padding: "4px 10px", borderRadius: 6 }}>
                    {p.label.toUpperCase()} · {p.weight.toUpperCase()}
                  </span>
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${IC.line}` }}>
                    <div style={{ fontFamily: IC.mono, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: IC.muted, marginBottom: 8 }}>Process</div>
                    <div style={{ fontSize: 13.5, color: IC.text }}>{p.phases.join("  →  ")}</div>
                  </div>
                </div>
                {sections.map((sec) => sec.rows.length > 0 && (
                  <div key={sec.title} style={{ padding: "16px 22px", borderTop: `1px solid ${IC.line}` }}>
                    <div style={{ fontFamily: IC.mono, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: IC.accent, marginBottom: 12 }}>{sec.title}</div>
                    {sec.rows.map(([k, v]) => (
                      <div key={k} style={{ display: "flex", gap: 16, padding: "6px 0" }}>
                        <span style={{ width: 130, flexShrink: 0, fontSize: 12.5, color: IC.muted }}>{k}</span>
                        <span style={{ fontSize: 13.5, color: IC.text, lineHeight: 1.45 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                ))}
                <div style={{ padding: "14px 22px", borderTop: `1px dashed ${IC.lineStrong}`, display: "flex", justifyContent: "space-between",
                  fontFamily: IC.mono, fontSize: 10.5, color: IC.faint, letterSpacing: "0.05em" }}>
                  <span>SUBMITTED {new Date().toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }).toUpperCase()}</span>
                  <span>KEEP FOR YOUR RECORDS</span>
                </div>
              </div>

              <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
                <button type="button" onClick={downloadPdf} disabled={pdfState === "working"} style={{
                  display: "flex", alignItems: "center", gap: 9, padding: "12px 20px", borderRadius: 11, border: "none",
                  cursor: pdfState === "working" ? "default" : "pointer", fontSize: 14, fontWeight: 600, fontFamily: IC.body,
                  background: IC.accent, color: "#fff", opacity: pdfState === "working" ? 0.7 : 1, transition: "all 160ms ease" }}>
                  {pdfState === "working" ? <FileText size={16} /> : <Download size={16} />}
                  {pdfState === "working" ? "Generating…" : "Download PDF ticket"}
                </button>
                <button type="button" onClick={onClose} style={intakeGhostBtn}>Done</button>
                {pdfState === "error" && <span style={{ fontSize: 12.5, color: IC.error, fontFamily: IC.mono }}>Couldn't generate — check connection and retry.</span>}
              </div>
            </div>
          ) : (
            <>
              {/* STEP 1 — TYPE */}
              {step === 0 && (
                <div className="intake-reveal">
                  <h2 style={{ ...iHStyle }}>What kind of motion are we building?</h2>
                  <p style={{ ...iPStyle, marginBottom: 20 }}>Pick one — lighter work asks for less, deeper work earns more detail. Your choice sets the process and the questions that follow.</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", gap: 10 }}>
                    {Object.values(INTAKE_PATHWAYS).map((pw) => {
                      const Icon = pw.icon; const active = f.type === pw.key;
                      return (
                        <button key={pw.key} type="button" onClick={() => setF((s) => ({ ...s, type: pw.key }))} style={{
                          textAlign: "left", padding: 16, borderRadius: 12, cursor: "pointer",
                          border: `1px solid ${active ? IC.accent : IC.line}`, background: active ? IC.accentDim : IC.surface2,
                          transition: "all 160ms ease" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                            <Icon size={18} color={active ? IC.accent : IC.text} strokeWidth={1.6} />
                            <span style={{ fontFamily: IC.mono, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
                              color: active ? IC.accent : IC.faint }}>{pw.weight}</span>
                          </div>
                          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{pw.label}</div>
                          <div style={{ fontSize: 12.5, color: IC.muted, lineHeight: 1.4 }}>{pw.blurb}</div>
                        </button>
                      );
                    })}
                  </div>

                  {p && (
                    <div key={f.type} className="intake-reveal" style={{ marginTop: 24, padding: "20px 18px 16px", background: IC.surface2, borderRadius: 12, border: `1px solid ${IC.line}` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                        <span style={{ fontFamily: IC.mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: IC.muted }}>Your process</span>
                        <span style={{ fontFamily: IC.mono, fontSize: 11, color: IC.accent }}>{p.weight} · {p.phases.length} phases</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {p.phases.map((ph, i, arr) => (
                          <React.Fragment key={ph}>
                            <div className="intake-phase-node" style={{ animationDelay: `${i * 60}ms`, textAlign: "center" }}>
                              <div style={{ width: 11, height: 11, borderRadius: 999, margin: "0 auto 8px", background: IC.accent, boxShadow: `0 0 0 4px ${IC.accentDim}` }} />
                              <span style={{ fontSize: 10.5, color: IC.muted, fontFamily: IC.mono, whiteSpace: "nowrap" }}>{ph}</span>
                            </div>
                            {i < arr.length - 1 && <div className="intake-phase-line" style={{ animationDelay: `${i * 60 + 30}ms`, flex: 1, height: 1, background: IC.lineStrong, marginBottom: 20 }} />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 0 && attempted && !f.type && (
                    <p style={{ marginTop: 14, fontSize: 12.5, color: IC.error, fontFamily: IC.mono }}>Select a type to continue.</p>
                  )}
                </div>
              )}

              {/* STEP 2 — BASICS */}
              {step === 1 && p && (
                <div ref={basicsRef} className="intake-reveal" style={{ scrollMarginTop: 20 }}>
                  <h2 style={{ ...iHStyle }}>The basics</h2>
                  <p style={{ ...iPStyle, marginBottom: 20 }}>Who's asking, and what are we calling it. Fields marked <span style={{ color: IC.accent }}>*</span> are required.</p>
                  <IField label="Project name" required error={showErr("project")}>
                    <IInput value={f.project} onChange={set("project")} invalid={showErr("project")} placeholder="e.g. Add-to-bag celebration" />
                  </IField>
                  <IRow>
                    <IField label="Your name" required error={showErr("reqName")}>
                      <IInput value={f.reqName} onChange={set("reqName")} invalid={showErr("reqName")} placeholder="Full name" />
                    </IField>
                    <IField label="Your role" required error={showErr("reqRole")}>
                      <ICombo value={f.reqRole} onChange={set("reqRole")} invalid={showErr("reqRole")} options={roleOptions} listId="intake-role-options" placeholder="Select or type a role" />
                    </IField>
                  </IRow>
                  <IRow>
                    <IField label="Stakeholder team"><ICombo value={f.team} onChange={set("team")} options={teamOptions} listId="intake-team-options" placeholder="Select or type a team" /></IField>
                    <IField label="Priority"><ISelect value={f.priority} onChange={set("priority")} options={["Low", "Medium", "High", "Urgent"]} /></IField>
                  </IRow>
                  {p.needsPlatform && (
                    <IField label="Platform" hint="where it ships — select all that apply">
                      <IChips options={INTAKE_PLATFORMS} sel={f.platforms} onToggle={toggleIn("platforms")} />
                    </IField>
                  )}
                  <IField label="Target date" hint="optional"><IInput type="date" value={f.deadline} onChange={set("deadline")} /></IField>
                  <IField label="Collaborators" hint="who else is involved">
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {collabs.map((c, i) => (
                        <div key={i} style={{ display: "flex", gap: 8 }}>
                          <IInput value={c.name} placeholder="Name" style={{ flex: 2 }}
                            onChange={(e) => setCollabs((s) => s.map((x, j) => j === i ? { ...x, name: e.target.value } : x))} />
                          <IInput value={c.role} placeholder="Role" style={{ flex: 1 }}
                            onChange={(e) => setCollabs((s) => s.map((x, j) => j === i ? { ...x, role: e.target.value } : x))} />
                          {collabs.length > 1 && (
                            <button type="button" onClick={() => setCollabs((s) => s.filter((_, j) => j !== i))}
                              style={{ background: "transparent", border: `1px solid ${IC.line}`, borderRadius: 10, color: IC.muted, cursor: "pointer", padding: "0 11px" }}><X size={14} /></button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={() => setCollabs((s) => [...s, { name: "", role: "" }])}
                        style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 6, background: "transparent", border: "none", color: IC.accent, cursor: "pointer", fontSize: 13, fontFamily: IC.body, padding: "4px 0" }}>
                        <Plus size={14} /> Add collaborator
                      </button>
                    </div>
                  </IField>
                </div>
              )}

              {/* STEP 3 — DETAILS */}
              {step === 2 && p && (
                <div className="intake-reveal">
                  <h2 style={{ ...iHStyle }}>{p.label} details</h2>
                  <p style={{ ...iPStyle, marginBottom: 8 }}>The specifics for a {p.weight.toLowerCase()} request. Everything here is optional — fill what's useful.</p>
                  {p.sections.map((id) => detail(id))}
                </div>
              )}

              {/* STEP 4 — REVIEW */}
              {step === 3 && p && (
                <div className="intake-reveal">
                  <h2 style={{ ...iHStyle }}>Review &amp; submit</h2>
                  <p style={{ ...iPStyle, marginBottom: 20 }}>Here's the request as it'll be filed. Tap any step above to edit, or submit to add it to your tracker.</p>

                  <div style={{ border: `1px solid ${IC.line}`, borderRadius: 14, overflow: "hidden", background: IC.surface }}>
                    <div style={{ height: 4, background: IC.accent }} />
                    <div style={{ padding: "20px 20px 6px" }}>
                      <h3 style={{ fontFamily: IC.display, fontWeight: 700, fontSize: 20, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{f.project || "Untitled request"}</h3>
                      <span style={{ display: "inline-block", fontFamily: IC.mono, fontSize: 11, letterSpacing: "0.06em",
                        color: IC.accent, background: IC.accentDim, padding: "4px 10px", borderRadius: 6 }}>
                        {p.label.toUpperCase()} · {p.weight.toUpperCase()}
                      </span>
                      <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${IC.line}` }}>
                        <div style={{ fontFamily: IC.mono, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: IC.muted, marginBottom: 8 }}>Process</div>
                        <div style={{ fontSize: 13.5, color: IC.text }}>{p.phases.join("  →  ")}</div>
                      </div>
                    </div>
                    {buildIntakeSummary(f, collabs, p).map((sec) => sec.rows.length > 0 && (
                      <div key={sec.title} style={{ padding: "14px 20px", borderTop: `1px solid ${IC.line}` }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                          <div style={{ fontFamily: IC.mono, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: IC.accent }}>{sec.title}</div>
                          <button type="button" onClick={() => goToStep(sec.title === "Basics" ? 1 : 2)}
                            style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer",
                              color: IC.muted, fontFamily: IC.mono, fontSize: 10.5, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            <Edit2 size={11} /> Edit
                          </button>
                        </div>
                        {sec.rows.map(([k, v]) => (
                          <div key={k} style={{ display: "flex", gap: 16, padding: "5px 0" }}>
                            <span style={{ width: 130, flexShrink: 0, fontSize: 12.5, color: IC.muted }}>{k}</span>
                            <span style={{ fontSize: 13.5, color: IC.text, lineHeight: 1.45 }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer nav — only during the wizard (not on the received screen) */}
        {!done && (
          <div style={{
            position: "sticky", bottom: 0, zIndex: 6, background: IC.bg,
            borderTop: `1px solid ${IC.line}`, padding: "14px 22px",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
          }}>
            <button
              type="button" onClick={goBack} disabled={step === 0}
              style={{
                display: "flex", alignItems: "center", gap: 7, padding: "10px 16px", borderRadius: 10,
                border: `1px solid ${IC.line}`, background: "transparent",
                color: step === 0 ? IC.faint : IC.muted, cursor: step === 0 ? "default" : "pointer",
                fontSize: 13.5, fontFamily: IC.body, opacity: step === 0 ? 0.5 : 1,
              }}
            >
              <ArrowLeft size={15} /> Back
            </button>

            <span style={{ fontFamily: IC.mono, fontSize: 11, color: IC.faint, letterSpacing: "0.05em" }}>
              Step {step + 1} of {STEPS.length}
            </span>

            {step < STEPS.length - 1 ? (
              <button
                type="button" onClick={goNext}
                disabled={step === 0 && !f.type}
                style={{
                  display: "flex", alignItems: "center", gap: 8, padding: "11px 18px", borderRadius: 10, border: "none",
                  cursor: (step === 0 && !f.type) ? "default" : "pointer", fontSize: 13.5, fontWeight: 600, fontFamily: IC.body,
                  background: IC.accent, color: "#fff", opacity: (step === 0 && !f.type) ? 0.5 : 1, transition: "all 160ms ease",
                }}
              >
                Next <ArrowRight size={15} />
              </button>
            ) : (
              <button
                type="button" onClick={submit}
                style={{
                  display: "flex", alignItems: "center", gap: 8, padding: "11px 18px", borderRadius: 10, border: "none",
                  cursor: "pointer", fontSize: 13.5, fontWeight: 600, fontFamily: IC.body,
                  background: IC.accent, color: "#fff", transition: "all 160ms ease",
                }}
              >
                <Send size={15} /> Submit request
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
