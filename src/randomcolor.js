export const randomColor = () =>{
    const colors = ['#FF0000','#00FF00','#0000FF','#FFD700','#FF1493','#FF00FF', '#A0522D', '#00FFFF']
    const rand = Math.floor(Math.random()*colors.length)
    return colors[rand]
}