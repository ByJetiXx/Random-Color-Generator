function rastgeleRenk() {
    const harfler = '0123456789ABCDEF';
    let renk = '#';
    for (let i = 0; i < 6; i++) {
        renk += harfler[Math.floor(Math.random() * 16)];
    }
    return renk;
}

document.body.style.backgroundColor = rastgeleRenk();
