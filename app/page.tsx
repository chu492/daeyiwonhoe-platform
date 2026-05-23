export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#f0f4ff", minHeight: "100vh" }}>

      {/* 헤더 */}
      <nav style={{ background: "white", padding: "0 48px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8ecf5" }}>
        <span style={{ color: "#1E3A5F", fontSize: "18px", fontWeight: "bold" }}>
          🏛️ 대의원회 통합 플랫폼
        </span>
        <div style={{ display: "flex", gap: "36px" }}>
          <a href="/calendar" style={{ color: "#1E3A5F", textDecoration: "none", fontSize: "15px" }}>캘린더</a>
          <a href="/board" style={{ color: "#1E3A5F", textDecoration: "none", fontSize: "15px" }}>학년별 보드</a>
        </div>
      </nav>

      {/* 히어로 */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <h1 style={{ color: "#1E3A5F", fontSize: "52px", fontWeight: "900", marginBottom: "16px" }}>
          대의원회 <span style={{ color: "#2B7FFF" }}>통합 플랫폼</span>
        </h1>
        <p style={{ color: "#888", fontSize: "18px", marginBottom: "40px" }}>
          일정 충돌 없이, 업무 누락 없이
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <a href="/calendar" style={{ background: "#2B7FFF", color: "white", padding: "14px 36px", borderRadius: "8px", fontSize: "15px", fontWeight: "bold", textDecoration: "none" }}>
            📅 캘린더 보기
          </a>
          <a href="/board" style={{ background: "white", color: "#2B7FFF", padding: "14px 36px", borderRadius: "8px", fontSize: "15px", fontWeight: "bold", textDecoration: "none", border: "2px solid #2B7FFF" }}>
            📋 학년별 보드
          </a>
        </div>
      </section>

      {/* 요약 카드 */}
      <section style={{ display: "flex", gap: "20px", padding: "0 48px 40px" }}>
        {[
          { icon: "📅", label: "이번 주 일정", value: "3개" },
          { icon: "👥", label: "전체 대의원", value: "40명" },
          { icon: "🏛️", label: "다음 대의원회", value: "D-9" }
        ].map((card, i) => (
          <div key={i} style={{ flex: 1, background: "white", borderRadius: "16px", padding: "28px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <span style={{ fontSize: "36px" }}>{card.icon}</span>
            <div>
              <div style={{ fontSize: "13px", color: "#888", marginBottom: "4px" }}>{card.label}</div>
              <div style={{ fontSize: "24px", fontWeight: "900", color: "#2B7FFF" }}>{card.value}</div>
            </div>
          </div>
        ))}
      </section>

      {/* 공지사항 */}
      <section style={{ padding: "0 48px 48px" }}>
        <h2 style={{ color: "#1E3A5F", fontSize: "18px", fontWeight: "800", marginBottom: "16px" }}>
          📢 공지사항
        </h2>
        {[
          { title: "공동 캘린더 사용 방법 공지", date: "2026.05.20", id: "1" },
          { title: "플랫폼 사용방법 안내", date: "2026.05.18", id: "2" },
          { title: "학년별 보드 사용 방법 공지", date: "2026.05.15", id: "3" }
        ].map((notice, i) => (
          <a key={i} href={`/notice/${notice.id}`} style={{ textDecoration: "none" }}>
            <div style={{ background: "white", borderRadius: "12px", padding: "20px 24px", borderLeft: "4px solid #2B7FFF", marginBottom: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", cursor: "pointer" }}>
              <span style={{ fontSize: "15px", fontWeight: "500", color: "#1E3A5F" }}>{notice.title}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "13px", color: "#aaa" }}>{notice.date}</span>
                <span style={{ color: "#2B7FFF" }}>›</span>
              </div>
            </div>
          </a>
        ))}
      </section>

    </main>
  );
}