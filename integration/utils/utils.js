export const emailGenerator = emailLength => {
    const chars = 'abcdefjhijklmnopqrstuvwxyz0123456789';
    let res = '';
    let randIndex;
    for(let i = 0; i < emailLength; i++) {
        if(i === 0) {
            randIndex = Math.floor(Math.random() * chars.indexOf('0'));
        } else {
            randIndex = Math.floor(Math.random() * chars.length)
        }
        res += chars[randIndex];
    }
    return `aqa_${res}@gmail.com`;
}

export async function getResponse(response) {
    if (response.ok()) {
        const responseData = await response.json();
        return responseData;  
    } else {
        const errorData = await response.json();
        console.log('Error creating car:', errorData);
        return errorData;
    }
}