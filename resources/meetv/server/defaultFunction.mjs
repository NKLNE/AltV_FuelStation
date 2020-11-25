export function isInRangeOfPoint(vector1, vector2, range)
{
    let distance = Math.sqrt(Math.pow(vector1.x - vector2.x, 2) + Math.pow(vector1.y - vector2.y, 2) + Math.pow(vector1.z - vector2.z, 2))
    return (distance <= range)
}