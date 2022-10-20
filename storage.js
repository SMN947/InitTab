storage = {
    save: (key, value) => {
        let data = {}
        data[key] = value
        chrome.storage.sync.set(data);
    }, get: (key) => {
        chrome.storage.sync.get(key, function (data) {
            return data;
        });
    }
}