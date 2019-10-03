module.exports = function zeros(expression) {
  let five = 0;
  let two = 0;
    let numberArr = expression.split("*");
    for (let i = 0; i < numberArr.length; i++) {

        if (numberArr[i].indexOf("!") == numberArr[i].length - 1) {
            let elem = numberArr[i].slice(0, numberArr[i].length - 1);
            for (let j = 1; j <= elem; j++) {
                if (j % 5 == 0) {
                    let numb = j;
                    while (numb >= 5 && numb % 5 == 0) {
                        numb = numb / 5;
                        five++;
                    }
                } else if (j % 2 == 0) {
                    let numb = j;
                    while (numb >= 2 && numb % 2 == 0) {
                        numb = numb / 2;
                        two++;
                    }
                }
            }

        } else {
            let elem = numberArr[i].slice(0, numberArr[i].length - 2);
            if (elem % 2 == 1) {
                let index = 1;
                for (let j = 1; j <= elem; j = 2 * index - 1) {
                    index++;
                    if (j % 5 == 0) {
                        let numb = j;
                        while (numb >= 5 && numb % 5 == 0) {
                            numb = numb / 5;
                            five++;
                        }
                    }
                }
            } else {
                let index = 1;
                for (let j = 2; j <= elem; j = 2 * index) {
                    index++;
                    if (j % 5 == 0) {
                        let numb = j;
                        while (numb >= 5 && numb % 5 == 0) {
                            numb = numb / 5;
                            five++;
                        }
                    } else if (j % 2 == 0) {
                        let numb = j;
                        while (numb >= 2 && numb % 2 == 0) {
                            numb = numb / 2;
                            two++;
                        }
                    }
                }
            }
        }
    }
    return five < two ? five : two;}

