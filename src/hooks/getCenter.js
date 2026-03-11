export default function getCenter(X, Y, width, height) {
    const CenterXpy = X + (width/2)
    const CenterYpy = Y + (height/2)
    const CenterXjar = X + (width/2)
    const CenterYjar = Y + (height/2)
    const CenterXhtml = X + (width/2)
    const CenterYhtml = Y + (height/2)
    return {CenterXpy, CenterYpy,CenterXjar, CenterYjar, CenterXhtml, CenterYhtml}
}