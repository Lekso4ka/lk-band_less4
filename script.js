
fetch(path + "/show")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        if (data.length) {
            for (let pet of data) {
                createCard(pet, block);
            }
        }
    })
