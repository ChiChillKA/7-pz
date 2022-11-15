console.log("Задание 1")
let allList = ['mail1@mail.ru', 'mail2@mail.ru', 'mail3@mail.ru', 'mail4@mail.ru', 'mail5@mail.ru', 'mail6@mail.ru', 'mail7@mail.ru', 'mail8@mail.ru', 'mail9@mail.ru',
 'nonmail1@mail.ru', 'nonmail2@mail.ru'];
let blackList = ['nonmail1@mail.ru', 'nonmail2@mail.ru'];
function getValidEmails(list1, list2) {
    return list1.filter((mail) => !list2.includes(mail));
  }
  console.log("Почты в белом списке: ",getValidEmails(allList, blackList));