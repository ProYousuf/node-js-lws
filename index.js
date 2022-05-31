

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=PATH MODULE=-=-=-=-=-=-=-==--=-=-=--=-=-===-=-=-=-

const path=require('path')


const filename=path.basename('E:/Node.js/lws/index.js')
console.log(filename)
const filename2=path.basename('E:/Node.js/lws/index.js','.js')
console.log(filename2)


console.log(path.delimiter)

const derectoris=path.dirname('E:/Node.js/lws/index.js')
const derectoris1=path.extname('E:/Node.js/lws/index.js') //filename extention dekhai
const derectoris2=path.parse('E:/Node.js/lws/index.js') //pura path obj dekhai

console.log(derectoris)
console.log(derectoris1)       
console.log(derectoris2)   

const pobj={
    root: 'E:/',
    dir: 'E:/Node.js/lws',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  }

   console.log(path.format(pobj)) //path object ke 1 line e string kore dei


//============================== OS MODULE OPERATING-SYSTEM =====================================

const os=require('os')

console.log(os.platform())
console.log(os.homedir())
console.log(os.freemem())
console.log(os.cpus())


//---------------------FS MODULE----FILE-SYSTEM--------------

const fs=require('fs')

fs.writeFileSync('myfile.txt','my name is YOUSUF')  //kono file make kora and tate kisu lekha
fs.appendFileSync('myfile.txt','i am web developer,mern stack developer')  // existing file e kisu lekha

const data=fs.readFileSync('myfile.txt')  // syncronus way te kaj korse
console.log(data)  //buffer type er data return kore
console.log(data.toString())  //buffer type er data return kore

fs.readFile('myfile.txt',(err,data)=>{       
console.log(data.toString())                     //Asyncronus way te kaj kore.fole ekhane ekta callback function lagbe
                                                    //callback er parameter hisebe error r data pai
})

console.log('hello')