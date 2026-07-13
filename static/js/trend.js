document.addEventListener('DOMContentLoaded', function() {
    // 1. 맞춤 대출 찾기 로직
    const filterForm = document.getElementById('loanFilterForm');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const target = document.getElementById('targetType').value;
            const purpose = document.getElementById('loanPurpose').value;
            const resultBox = document.getElementById('filterResults');
            
            resultBox.innerHTML = `
                <div class="result-item">
                    <h4>[추천] ${target === 'youth' ? '청년 전용' : (target === 'newlywed' ? '신혼부부 전용' : '일반')} ${purpose === 'purchase' ? '디딤돌 대출' : '버팀목 전세자금대출'}</h4>
                    <p>금리: 연 1.5% ~ 2.4% (조건별 차등)</p>
                    <p>한도: 최대 3억원</p>
                    <a href="#" style="color:var(--primary-color); font-weight:bold;">자세히 보기 &rarr;</a>
                </div>`;
        });
    }

    // 2. 대출 한도 & 금리 계산기 로직
    const calcForm = document.getElementById('calcForm');
    if (calcForm) {
        calcForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const principal = parseFloat(document.getElementById('principal').value) * 10000;
            const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
            const months = parseInt(document.getElementById('term').value) * 12;
            let monthlyPayment = 0;
            
            // 원리금균등상환 공식
            if (rate > 0) {
                monthlyPayment = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
            } else {
                monthlyPayment = principal / months;
            }
            
            const resultEl = document.getElementById('calcResultVal');
            const formatted = Math.floor(monthlyPayment).toLocaleString('ko-KR');
            resultEl.textContent = `${formatted} 원`;
        });
    }
});