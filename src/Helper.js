
class Helper
{

    string2date(string, withMinutes) {
        if (string) {
            var date = new Date(string);
            if (date) {
                let datetime = [];
                datetime.push(date.getDate());
                datetime.push(date.getMonth());
                datetime.push(date.getFullYear());
                if (withMinutes) {
                    var time = [];
                    time.push(date.getHours());
                    time.push((date.getMinutes() < 10 ? '0' : '') + date.getMinutes());
                    time.push((date.getSeconds() < 10 ? '0' : '') + date.getSeconds());

                    return `${datetime.join(".")} ${time.join(":")}`;
                }

                return datetime.join(".");
            }
        }

        return "";
    }
}

export default Helper;