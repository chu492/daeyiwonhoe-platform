export default function Notice2() {
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
        <h1 style={{ color: "#1E3A5F", fontSize: "28px", fontWeight: "900", margin: "24px 0 8px" }}>플랫폼 사용방법 안내</h1>
        <p style={{ color: "#aaa", fontSize: "13px", marginBottom: "32px" }}>2026.05.18 · 대의원회</p>
        <div style={{ background: "white", borderRadius: "16px", padding: "32px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", lineHeight: "1.8", color: "#333", fontSize: "15px" }}>
          <p>안녕하세요, 대의원회 통합 플랫폼입니다.</p><br/>
          <p>대의원회 통합 플랫폼 사용 방법을 안내드립니다.</p><br/>
          <h3 style={{ color: "#1E3A5F", marginBottom: "12px" }}>🏛️ 플랫폼 구성</h3>
          <p>• <strong>메인 홈</strong> — 공지사항 및 주요 현황 확인</p>
          <p>• <strong>공동 캘린더</strong> — 전체 일정 등록 및 조회</p>
          <p>• <strong>학년별 보드</strong> — 학년별 업무 현황 관리</p><br/>
          <h3 style={{ color: "#1E3A5F", marginBottom: "12px" }}>💡 이용 안내</h3>
          <p>• 본 플랫폼은 대의원회 공식 업무 도구입니다.</p>
          <p>• 일정 및 업무는 담당 대의원이 직접 등록해주세요.</p>
          <p>• 문의사항은 대의원회 담당자에게 연락해주세요.</p><br/>
          <p>함께 만들어가는 대의원회를 위해 적극 활용해주세요! 😊</p>
        </div>
      </section>
    </main>
  );
}