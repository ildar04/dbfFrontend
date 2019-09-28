
class Helper
{

    string2date(string) {
        if (string) {
            var date = new Date(string);
            if (date) {
                let datetime = [];
                datetime.push(date.getDate());
                datetime.push(date.getMonth());
                datetime.push(date.getFullYear());

                return datetime.join(".");
            }
        }

        return "";
    }
}

export default Helper;