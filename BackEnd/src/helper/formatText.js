

export function formatText(text) {

    const textFormated = text.map(item => item.split('/')[1])
    return textFormated

}