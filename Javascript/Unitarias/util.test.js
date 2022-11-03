const puppeteer = require('puppeteer');
const { generateAge, generateNumber, generateMail, checkAndGenerateAge, checkAndGeneratePhone, checkAndGenerateMail, validateInput } = require('./util')

/*------------------
Pruebas unitarias
--------------------*/
describe('Serie de pruebas unitarias', () => {
test('debería mostrar el nombre y edad', () => {
    const text = generateAge('Felipe', 23);
    expect(text).toBe('Felipe (23 años)');
})

test('debería mostrar el nombre y telefono', () => {
    const text = generateNumber('Felipe', 5586048520);
    expect(text).toBe('Felipe (5586048520, móbil)');
})

test('debería mostrar el nombre y mail', () => {
    const text = generateMail('Felipe', 'febeja@microsft.com');
    expect(text).toBe('Felipe (Tu correo es: febeja@microsft.com)');
})

test('prueba para evaluar validateInput', () => {
    const givenResult = validateInput('', true, false);
    expect(givenResult).toBe(false);
})

});



/*------------------
Pruebas de integración
--------------------*/
describe('Serie de pruebas de integración', () => {
    test('deberá generar una salida de texto válida para la edad', () => {
        const text = checkAndGenerateAge('Marcela', 38);
        expect(text).toBe('Marcela (38 años)')
    })

    test('deberá generar una salida de texto válida para el teléfono', () => {
        const text = checkAndGeneratePhone('Marcela', 5548569274);
        expect(text).toBe('Marcela (5548569274, móbil)')
    })

    test('deberá generar una salida de texto válida para el correo', () => {
        const text = checkAndGenerateMail('Marcela', 'marcemar@microsoft.com');
        expect(text).toBe('Marcela (Tu correo es: marcemar@microsoft.com)')
    })
});

/*------------------
Pruebas E2E
--------------------
describe('Serie de pruebas e2e', () => {
    test('probando el formulario de edad', async() => {
        const explore = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920,1080']
        });

        const page = await explore.newPage();
        await page.goto('file:///mnt/c/Users/amines/Documents/Github/curso-pruebas/Javascript/Unitarias/index.html');
        
        await page.click('input#name1');
        await page.type('input#name1', 'Miranda');

        await page.click('input#age');
        await page.type('input#age', '25');

        await page.click('#btnAddAge');
    }, 11000)

    test('probando el formulario de teléfono', async() => {
        const explore = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920,1080']
        });

        const page = await explore.newPage();
        await page.goto('file:///mnt/c/Users/amines/Documents/Github/curso-pruebas/Javascript/Unitarias/index.html');
        
        await page.click('input#name2');
        await page.type('input#name2', 'Miranda');

        await page.click('input#phone');
        await page.type('input#phone', '5548759842');

        await page.click('#btnAddPhone')

    }, 10000)

    test('probando el formulario de correo', async() => {
        const explore = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920,1080']
        });

        const page = await explore.newPage();
        await page.goto('file:///mnt/c/Users/amines/Documents/Github/curso-pruebas/Javascript/Unitarias/index.html');
        
        await page.click('input#name3');
        await page.type('input#name3', 'Miranda');

        await page.click('input#mail');
        await page.type('input#mail', 'miresp@microsoft.com');

        await page.click('#btnAddMail');

    }, 25000)
});*/