export default function Notice3() {
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
        <h1 style={{ color: "#1E3A5F", fontSize: "28px", fontWeight: "900", margin: "24px 0 8px" }}>학년별 보드 사용 방법 공지</h1>
        <p style={{ color: "#aaa", fontSize: "13px", marginBottom: "32px" }}>2026.05.15 · 대의원회</p>
        <div style={{ background: "white", borderRadius: "16px", padding: "32px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", lineHeight: "1.8", color: "#333", fontSize: "15px" }}>
          <p>안녕하세요, 대의원회입니다.</p><br/>
          <p>학년별 보드 사용 방법을 안내드립니다.</p><br/>
          <h3 style={{ color: "#1E3A5F", marginBottom: "12px" }}>📋 보드 구성</h3>
          <p>• <strong>1학년 / 2학년 / 3학년</strong> 총 3개 열로 구성되어 있습니다.</p>
          <p>• 각 열에는 해당 학년 대의원의 업무 카드가 표시됩니다.</p><br/>
          <h3 style={{ color: "#1E3A5F", marginBottom: "12px" }}>💡 사용 방법</h3>
          <p>1. 상단 메뉴에서 <strong>학년별 보드</strong> 클릭</p>
          <p>2. 해당 학년 열 하단의 <strong>+ 업무 추가</strong> 클릭</p>
          <p>3. 업무명과 날짜 입력 후 추가</p><br/>
          <p>각 학년 대의원은 본인 학년 열에 업무를 꼭 등록해주세요! 😊</p>
        </div>
      </section>
    </main>
  );
}