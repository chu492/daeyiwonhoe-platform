"use client";
import { useState } from "react";

export default function Calendar() {
  const [selected, setSelected] = useState("전체");
  const [showForm, setShowForm] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDept, setNewDept] = useState("대의원회");

  const deptColors: { [key: string]: string } = {
    "대의원회": "#2B7FFF",
    "어울림부": "#FFB347",
    "학습성장부": "#52c97a",
    "진로미래부": "#FF6B6B",
    "인사이트부": "#A78BFA",
    "크리에이티브부": "#F472B6",
    "생활혁신부": "#06B6D4",
  };

  const [events, setEvents] = useState([
    { date: "2026.05.28", title: "5월 정기 대의원회 회의", department: "대의원회", color: "#2B7FFF" },
    { date: "2026.05.30", title: "수학 경시대회", department: "학습성장부", color: "#52c97a" },
    { date: "2026.06.05", title: "체육대회 준비 회의", department: "어울림부", color: "#FFB347" },
    { date: "2026.06.10", title: "지역 봉사활동", department: "생활혁신부", color: "#06B6D4" },
    { date: "2026.06.18", title: "독서 토론 대회", department: "인사이트부", color: "#A78BFA" },
  ]);

  const filtered = selected === "전체" ? events : events.filter(e => e.department === selected);

  const handleAdd = () => {
    if (!newDate || !newTitle) return;
    setEvents([...events, {
      date: newDate,
      title: newTitle,
      department: newDept,
      color: deptColors[newDept]
    }]);
    setNewDate("");
    setNewTitle("");
    setNewDept("대의원회");
    setShowForm(false);
  };

  return (
    <main style={{ fontFamily: "sans-serif", background: "#f0f4ff", minHeight: "100vh" }}>
      <nav style={{ background: "white", padding: "0 48px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8ecf5" }}>
        <a href="/" style={{ color: "#1E3A5F", fontSize: "18px", fontWeight: "bold", textDecoration: "none" }}>
          🏛️ 대의원회 통합 플랫폼
        </a>
        <div style={{ display: "flex", gap: "36px" }}>
          <a href="/calendar" style={{ color: "#2B7FFF", textDecoration: "none", fontSize: "15px", fontWeight: "bold" }}>캘린더</a>
          <a href="/board" style={{ color: "#1E3A5F", textDecoration: "none", fontSize: "15px" }}>학년별 보드</a>
        </div>
      </nav>
      <section style={{ padding: "48px 48px 24px" }}>
        <h1 style={{ color: "#1E3A5F", fontSize: "32px", fontWeight: "900", marginBottom: "8px" }}>📅 공동 캘린더</h1>
        <p style={{ color: "#888", fontSize: "15px" }}>2주 전 등록 의무 — 모든 행사는 미리 등록해주세요</p>
      </section>
      <section style={{ padding: "0 48px 24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {["전체", "대의원회", "어울림부", "학습성장부", "진로미래부", "인사이트부", "크리에이티브부", "생활혁신부"].map((dept, i) => (
          <button key={i} onClick={() => setSelected(dept)} style={{ padding: "8px 20px", borderRadius: "20px", border: selected === dept ? "none" : "1px solid #ddd", background: selected === dept ? "#2B7FFF" : "white", color: selected === dept ? "white" : "#555", fontSize: "13px", cursor: "pointer", fontWeight: selected === dept ? "bold" : "normal" }}>
            {dept}
          </button>
        ))}
      </section>
      <section style={{ padding: "0 48px 48px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px", color: "#aaa", fontSize: "15px" }}>등록된 일정이 없어요</div>
        ) : (
          filtered.map((event, i) => (
            <div key={i} style={{ background: "white", borderRadius: "12px", padding: "20px 24px", marginBottom: "12px", display: "flex", alignItems: "center", gap: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", borderLeft: `4px solid ${event.color}` }}>
              <div style={{ minWidth: "100px", fontSize: "13px", color: "#888" }}>{event.date}</div>
              <div style={{ flex: 1, fontSize: "15px", fontWeight: "600", color: "#1E3A5F" }}>{event.title}</div>
              <div style={{ background: event.color + "20", color: event.color, padding: "4px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>{event.department}</div>
            </div>
          ))
        )}
        {showForm && (
          <div style={{ background: "white", borderRadius: "12px", padding: "24px", marginBottom: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <h3 style={{ color: "#1E3A5F", marginBottom: "16px", fontSize: "16px" }}>새 일정 추가</h3>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <input type="date" value={newDate} onChange={e => setNewDate(e.target.value)} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", flex: 1 }} />
              <input type="text" placeholder="일정 제목" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", flex: 2 }} />
              <select value={newDept} onChange={e => setNewDept(e.target.value)} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", flex: 1 }}>
                {["대의원회", "어울림부", "학습성장부", "진로미래부", "인사이트부", "크리에이티브부", "생활혁신부"].map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <button onClick={handleAdd} style={{ padding: "10px 28px", borderRadius: "8px", background: "#2B7FFF", color: "white", border: "none", fontSize: "14px", cursor: "pointer", fontWeight: "bold" }}>추가</button>
              <button onClick={() => setShowForm(false)} style={{ padding: "10px 28px", borderRadius: "8px", background: "#f0f4ff", color: "#888", border: "none", fontSize: "14px", cursor: "pointer" }}>취소</button>
            </div>
          </div>
        )}
        <button onClick={() => setShowForm(true)} style={{ width: "100%", padding: "16px", borderRadius: "12px", border: "2px dashed #2B7FFF", background: "transparent", color: "#2B7FFF", fontSize: "15px", cursor: "pointer", marginTop: "8px" }}>
          + 새 일정 추가
        </button>
      </section>
    </main>
  );
}