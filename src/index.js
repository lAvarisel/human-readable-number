module.exports = function toReadable (number) {
  let result;
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let numberLength = String(number).length;
  let arr = String(number).split('');
  let arr_1 = Number.parseInt(arr[0]);
  let arr_2 = Number.parseInt(arr[1]);
  let arr_3 = Number.parseInt(arr[2]);
  if (numberLength <= 20) result = numbers[number];
  switch (numberLength) {
    case (2):
      switch (number) {
        case (30):
          result = 'thirty'
          break;
        case (40):
          result = 'forty'
          break;
        case (50):
          result = 'fifty'
          break;
        default:
          let numb_1 = ''
          if (Number.parseInt(arr[0]+arr[1]) <= 20) {
            numb_1 = `${numbers[Number.parseInt(arr[0]+arr[1])]}`
            result = `${numb_1}`
          }
          else {
            switch (arr_1) {
              case (2):
                numb_1 = 'twenty'
                break;
              case (3):
                numb_1 = 'thirty'
                break;
              case (4):
                numb_1 = 'forty'
                break;
              case (5):
                numb_1 = 'fifty'
                break;
              case (8):
                numb_1 = `${numbers[arr_1]}y`
                break;
              default:
                  numb_1 = `${numbers[arr_1]}ty`
            }
            if (arr_2 === 0) result = `${numb_1}`
            else result = `${numb_1} ${numbers[arr_2]}`
          }
        }
      break;
    case (3):
      let numb_2 = ''
      if (Number.parseInt(arr[1]+arr[2]) <= 20) {
        if (arr_2 === 0 && arr_3 === 0) {
          result = `${numbers[arr_1]} hundred`
        }
        else {
          numb_2 = numbers[Number.parseInt(arr[1]+arr[2])];
          result = result = `${numbers[arr_1]} hundred ${numb_2}`
        }
      }
      else {
        switch (arr_2) {
          case (2):
              numb_2 = 'twenty'
              break;
          case (3):
              numb_2 = 'thirty'
              break;
          case (4):
              numb_2 = 'forty'
              break;
          case (5):
              numb_2 = 'fifty'
              break;
          case (8):
              numb_2 = `${numbers[arr_2]}y`
              break;
          default:
              numb_2 = `${numbers[arr_2]}ty`
        }
        if (arr_3 !== 0) {
          result = `${numbers[arr_1]} hundred ${numb_2} ${numbers[arr_3]}`
        }
        else {
          result = `${numbers[arr_1]} hundred ${numb_2}`
        }
      }
    break;
  }
  return result;   
}
