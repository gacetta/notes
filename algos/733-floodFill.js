/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const starting = image[sr][sc];

    function recurse(image, sr, sc) {
        // check boundaries
        if(sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1 || image[sr][sc] !== starting || image[sr][sc] === color) {
            return image
        }

        image[sr][sc] = color;

        recurse(image, sr + 1, sc)
        recurse(image, sr - 1, sc)
        recurse(image, sr, sc + 1)
        recurse(image, sr, sc - 1)

        return image
    }
    return recurse(image, sr, sc)
};