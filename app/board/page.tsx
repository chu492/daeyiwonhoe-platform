"use client";
import { useState, useEffect } from "react";

export default function Board() {
  const [tasks, setTasks] = useState<{id: string, title: string, date: string, grade: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");

  const grades = [
    { grade: "1학년", color: "#2B7FFF", emoji: "🟦" },
    { grade: "2학년", color: "#52c97a", emoji: "🟩" },
    { grade: "3학년", color: "#FF6B6B", emoji: "🟥" },
  ];

  useEffect(() => {
    fetch("/api/board")
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = async (grade: string) => {
    if (!newTitle || !newDate) return;
    const res = await fetch("/api/board", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, date: newDate, grade }),
    });
    const data = await res.json();
    setTasks([...tasks, { id: data.id, title: newTitle, date: newDate, grade }]);
    setNewTitle(""); setNewDate("");
    setShowForm(null);
  };

  return (
    <main style={{ fontFamily: "sans-serif", background: "#f0f4ff", minHeight: "100vh" }}>
      <nav style={{ background: "white", padding: "0 48px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8ecf5" }}>
        <a href="/" style={{ color: "#1E3A5F", fontSize: "18px", fontWeight: "bold", textDecoration: "none" }}>
          🏛️ 대의원회 통합 플랫폼
        </a>
        <div style={{ display: "flex", gap: "36px" }}>
          <a href="/calendar" style={{ color: "#1E3A5F", textDecoration: "none", fontSize: "15px" }}>캘린더</a>
          <a href="/board" style={{ color: "#2B7FFF", textDecoration: "none", fontSize: "15px", fontWeight: "bold" }}>학년별 보드</a>
        </div>
      </nav>
      <section style={{ padding: "48px 48px 24px" }}>
        <h1 style={{ color: "#1E3A5F", fontSize: "32px", fontWeight: "900", marginBottom: "8px" }}>📋 학년별 보드</h1>
        <p style={{ color: "#888", fontSize: "15px" }}>학년별 대의원 업무 및 일정을 확인하세요</p>
      </section>
      <section style={{ padding: "0 48px 48px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "48px", color: "#aaa", fontSize: "15px", gridColumn: "1/4" }}>불러오는 중...</div>
        ) : (
          grades.map((col, i) => {
            const gradeTasks = tasks.filter(t => t.grade === col.grade);
            return (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ marginBottom: "16px", paddingBottom: "12px", borderBottom: "2px solid #f0f4ff" }}>
                  <span style={{ fontSize: "16px", fontWeight: "800", color: "#1E3A5F" }}>{col.emoji} {col.grade} 대의원</span>
                </div>
                {gradeTasks.length === 0 && (
                  <div style={{ textAlign: "center", padding: "24px", color: "#aaa", fontSize: "13px" }}>등록된 업무가 없어요</div>
                )}
                {gradeTasks.map((task, j) => (
                  <div key={j} style={{ background: "#f0f4ff", borderRadius: "10px", padding: "14px 16px", marginBottom: "10px", borderLeft: `3px solid ${col.color}` }}>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#1E3A5F", marginBottom: "4px" }}>{task.title}</div>
                    <div style={{ fontSize: "11px", color: "#888" }}>{task.date}</div>
                  </div>
                ))}
                {showForm === col.grade && (
                  <div style={{ background: "#f8faff", borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
                    <input type="text" placeholder="업무 제목" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "13px", marginBottom: "8px" }} />
                    <input type="date" value={newDate} onChange={e => setNewDate(e.target.value)} style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "13px", marginBottom: "8px" }} />
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button onClick={() => handleAdd(col.grade)} style={{ flex: 1, padding: "8px", borderRadius: "6px", background: col.color, color: "white", border: "none", fontSize: "13px", cursor: "pointer", fontWeight: "bold" }}>추가</button>
                      <button onClick={() => setShowForm(null)} style={{ flex: 1, padding: "8px", borderRadius: "6px", background: "#eee", color: "#888", border: "none", fontSize: "13px", cursor: "pointer" }}>취소</button>
                    </div>
                  </div>
                )}
                <button onClick={() => setShowForm(col.grade)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px dashed #ccd", background: "transparent", color: "#aaa", fontSize: "13px", cursor: "pointer" }}>
                  + 업무 추가
                </button>
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}