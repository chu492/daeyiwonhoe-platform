export default function Notice1() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#f0f4ff", minHeight: "100vh" }}>
      <nav style={{ background: "white", padding: "0 48px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8ecf5" }}>
        <a href="/" style={{ color: "#1E3A5F", fontSize: "18px", fontWeight: "bold", textDecoration: "none" }}>🏛️ 대의원회 통합 플랫폼</a>
        <div style={{ display: "flex", gap: "36px" }}>
          <a href="/calendar" style={{ color: "#1E3A5F", textDecoration: "none", fontSize: "15px" }}>캘린더</a>
          <a href="/board" style={{ color: "#1E3A5F", textDecoration: "none", fontSize: "15px" }}>학년별 보드</a>
        </div>
      </nav>
      <section style={{ padding: "48px", maxWidth: "800px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#2B7FFF", textDecoration: "none", fontSize: "14px" }}>← 메인으로</a>
        <h1 style={{ color: "#1E3A5F", fontSize: "28px", fontWeight: "900", margin: "24px 0 8px" }}>공동 캘린더 사용 방법 공지</h1>
        <p style={{ color: "#aaa", fontSize: "13px", marginBottom: "32px" }}>2026.05.20 · 대의원회</p>
        <div style={{ background: "white", borderRadius: "16px", padding: "32px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", lineHeight: "1.8", color: "#333", fontSize: "15px" }}>
          <p>안녕하세요, 대의원회 통합 플랫폼입니다.</p><br/>
          <p>이번에 도입된 <strong>공동 캘린더</strong> 사용 방법을 안내드립니다.</p><br/>
          <h3 style={{ color: "#1E3A5F", marginBottom: "12px" }}>📌 등록 규칙</h3>
          <p>• 모든 행사 및 방송 일정은 <strong>2주 전까지</strong> 반드시 등록해주세요.</p>
          <p>• 일정 등록 시 날짜, 일정명, 부서를 함께 입력해주세요.</p>
          <p>• 일정 변경 시 기존 일정을 수정하고 담당자에게 개별 연락 바랍니다.</p><br/>
          <h3 style={{ color: "#1E3A5F", marginBottom: "12px" }}>📅 사용 방법</h3>
          <p>1. 상단 메뉴에서 <strong>캘린더</strong> 클릭</p>
          <p>2. 하단의 <strong>+ 새 일정 추가</strong> 버튼 클릭</p>
          <p>3. 날짜, 일정명, 부서 선택 후 추가</p><br/>
          <p>일정 충돌 없이 원활한 대의원회 활동을 위해 적극적인 협조 부탁드립니다.</p><br/>
          <p>감사합니다. 😊</p>
        </div>
      </section>
    </main>
  );
}