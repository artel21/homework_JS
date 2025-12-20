// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const coursesArrayElement of coursesArray) {
    const divForTitle = document.createElement('div');
    divForTitle.classList.add('forTitle');
    divForTitle.innerText = coursesArrayElement.title;


    const divForMonthDuration = document.createElement('div');
    divForMonthDuration.classList.add('forMonthDuration');
    divForMonthDuration.innerText = coursesArrayElement.monthDuration;


    const divForHourDuration = document.createElement('div');
    divForHourDuration.classList.add('forHourDuration');
    divForHourDuration.innerText = coursesArrayElement.hourDuration;


    const divForModules = document.createElement('div');
    divForModules.classList.add('forModules');

    const courseUl = document. createElement('ul');
    courseUl.classList.add('forCourseUl');
    for (const item of coursesArrayElement.modules) {
        const li = document.createElement('li')
        li.innerText = item;
        courseUl.appendChild(li);
        divForModules.appendChild(courseUl);
    }

    document.body.append(divForTitle, divForMonthDuration, divForHourDuration, divForModules);
}