// 3.3.3 다이내믹 임포트

// ES 모듈에서는 불가능

// import는 Promise를 반환하므로 await이나 then을 붙여야 함.

const a = true;
if (a) {
    const m1 = await import('./func.mjs');
    console.log(m1);
    const m2 = await import('/var.mjg');
    console.log(m2);
}