// 병원 기본 정보: 여러 컴포넌트에서 함께 쓰는 값은 여기서만 수정하세요.
export const CLINIC = {
    name: '행복한가정의학과',
    address: '충남 천안시 동남구 터미널9길 25',
    phone: '0507-1346-6575',
    tel: 'tel:0507-1346-6575',
    // 네이버 플레이스 (지도·예약 탭 포함)
    naverPlaceUrl: 'https://naver.me/GL8Jcuf3',
};

// 요일별 진료시간 (0 = 일요일). null 은 휴진.
// lunch 가 있는 날은 그 시간대에 점심시간으로 표시됩니다.
const FULL_DAY = { open: '09:00', close: '18:00', lunch: ['12:30', '14:00'] };
const MORNING = { open: '09:00', close: '12:00' };
const SUNDAY = { open: '15:00', close: '17:30' };

export const WEEKLY_HOURS = [SUNDAY, FULL_DAY, FULL_DAY, MORNING, FULL_DAY, FULL_DAY, MORNING];

const toMinutes = (hhmm) => {
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
};

// 한국 시간 기준 현재 요일/분
const nowInKorea = (date = new Date()) => {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Seoul',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    }).formatToParts(date);
    const get = (type) => parts.find(p => p.type === type).value;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
};

// 'open' | 'lunch' | 'before' | 'closed' 와 오늘 요일을 돌려줍니다.
// 공휴일은 알 수 없으므로 화면에 별도 안내 문구를 둡니다.
export const getOpenStatus = (date) => {
    const { day, minutes } = nowInKorea(date);
    const today = WEEKLY_HOURS[day];
    if (!today) return { day, status: 'closed' };
    if (minutes < toMinutes(today.open)) return { day, status: 'before', today };
    if (minutes >= toMinutes(today.close)) return { day, status: 'closed', today };
    if (today.lunch && minutes >= toMinutes(today.lunch[0]) && minutes < toMinutes(today.lunch[1])) {
        return { day, status: 'lunch', today };
    }
    return { day, status: 'open', today };
};
