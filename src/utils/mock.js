export const apiCall = function (data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.amount !== "" && Number(data.amount) % 2 === 0) {
                resolve({
                    success: true,
                });
            } else {
                reject({
                    success: false,
                });
            }
        }, 1000);
    });
};
