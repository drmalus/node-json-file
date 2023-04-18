const fs = require("fs");

class JsonFile {

    static write(file, data) {
        fs.writeFileSync(file, JSON.stringify(data, null, 2), {encoding: 'utf8', flag: 'w'});
    }

    static update(file, key, value) {
        let existingContent = {};
        if (fs.existsSync(file)) {
            existingContent = JSON.parse(fs.readFileSync(file));
        }
        existingContent[key] = value;
        fs.writeFileSync(file, JSON.stringify(existingContent, null, 2), {encoding: 'utf8', flag: 'w'});
    }

    static pushTo(file, data) {
        let existingContent = [];
        if (fs.existsSync(file)) {
            existingContent = JSON.parse(fs.readFileSync(file));
        }
        fs.writeFileSync(file, JSON.stringify([...existingContent, ...data], null, 2), {encoding: 'utf8', flag: 'w'});
    }

    static readFrom(file, defaultValue = []) {
        if (fs.existsSync(file)) {
            return JSON.parse(fs.readFileSync(file));
        }
        return defaultValue;
    }

}

module.exports = JsonFile;
