export default function (value) {
    const currency = process.env.VUE_APP_CURRENCY ? process.env.VUE_APP_CURRENCY : '$'
    return value ? `${currency} ${value.toLocaleString()}` : `${currency} 0`;
}