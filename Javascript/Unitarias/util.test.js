const puppeteer = require('puppeteer');
const { generateAge, generateNumber, generateMail, checkAndGenerateAge, checkAndGeneratePhone, checkAndGenerateMail } = require('./util')

/*------------------
Pruebas unitarias
--------------------*/
test('debería mostrar el nombre y edad', () => {
    const text = generateAge('Felipe', 23);
    expect(text).toBe('Felipe (23 años)');
});

test('debería mostrar el nombre y telefono', () => {
    const text = generateNumber('Felipe', 5586048520);
    expect(text).toBe('Felipe (5586048520, móbil)');
});

test('debería mostrar el nombre y mail', () => {
    const text = generateMail('Felipe', 'febeja@microsft.com');
    expect(text).toBe('Felipe (Tu correo es: febeja@microsft.com)');
});

/*------------------
Pruebas de integración
--------------------*/
test('deberá generar una salida de texto válida para la edad', () => {
    const text = checkAndGenerateAge('Marcela', 38);
    expect(text).toBe('Marcela (38 años)')
});

test('deberá generar una salida de texto válida para el teléfono', () => {
    const text = checkAndGeneratePhone('Marcela', 5548569274);
    expect(text).toBe('Marcela (5548569274, móbil)')
});

test('deberá generar una salida de texto válida para el correo', () => {
    const text = checkAndGenerateMail('Marcela', 'marcemar@microsoft.com');
    expect(text).toBe('Marcela (Tu correo es: marcemar@microsoft.com)')
});

/*------------------
Pruebas E2E
--------------------*/
test('dando unos cuandos clics', async() => {
    const explore = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });

    const page = await explore.newPage();
    await page.goto('file:///C:/Users/amines/Documents/Github/curso-pruebas/Javascript/Unitarias/index.html');
});