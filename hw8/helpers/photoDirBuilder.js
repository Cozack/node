const fs = require('fs');
const path = require('path');
const uuid = require('uuid').v1;
const { promisify } = require('util');

const mkdirPromise = promisify(fs.mkdir);

async function _photoDirBuilder(fileName, itemId, itemType, itemDirName) {
    const pathWithoutStatic = path.join(itemType, itemId.toString(), itemDirName);
    const photoDirectory = path.join(process.cwd(), 'static', pathWithoutStatic);

    const fileExtension = fileName.split('.').pop();
    const photoName = `${uuid()}.${fileExtension}`;
    const finalPath = path.join(photoDirectory, photoName);

    await mkdirPromise(photoDirectory, { recursive: true });

    return {
        finalPath,
        photoPath: path.join(pathWithoutStatic, photoName)
    };
}
module.exports = _photoDirBuilder;
