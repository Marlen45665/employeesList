export function initials(name){
    const initialFull =  name.split(' ').map(word => word.charAt(0)).join('');
    if (initialFull.length <= 2) {
        return initialFull;
    } else {
        return initialFull.substring(0, 2);
    }
}