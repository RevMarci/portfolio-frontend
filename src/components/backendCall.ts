const baseUrl: string = 'https://portfolio-backend-k1ed.onrender.com';

export async function wakeUp(): Promise<void> {
    console.log('Waking up the backend...');

    try {
        const response = await fetch(`${baseUrl}/wake`, {
            method: 'GET',
        });

        const data: { message: string } = await response.json();
        const serverMessage: string = data.message;
        console.log(serverMessage);
    } catch (error: unknown) {
        console.log(`Error on wake up: ${error}`);
        await new Promise<void>((resolve) => setTimeout(resolve, 1000));
        console.log('Another try...');
        wakeUp();
    }
}

document.addEventListener('click', async function (event: MouseEvent) {
    const target = event.target as HTMLElement | null;

    if (target && target.tagName === 'A') {
        const anchor = target as HTMLAnchorElement;
        
        await fetch(`${baseUrl}/click`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: anchor.href }),
        });
    }
});
