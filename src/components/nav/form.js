import React, { useState } from 'react';
import { db } from './firebase'
const Form = () => {
    const [Alert, setAlert] = useState('false')
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Detail, setDetail] = useState('')

    const [Nameerr, setNameerr] = useState('')
    const [Emailerr, setEmailerr] = useState('')
    const [Phoneerr, setPhoneerr] = useState('')
    const [Detailerr, setDetailerr] = useState('')

    let blacklist = '/*-+#$%^&*";:~`'.split('');
    let numlist = '0123456789+'.split('');
    let numlistfixed = 'zxcvbnm,./;lkjhgfdsaqwertyuiop[]!@#$%^&*()_`~?><:;|"{}'.split('');

    const submit = (e) => {
        e.preventDefault();
        const isValid = formvalidation();
        if (isValid) {
            db.collection('WD agency contact').add({
                Name: Name,
                Email: Email,
                Phone: Phone,
                Detail: Detail
            })
                .then(() => {
                    setAlert('true')
                    setTimeout(() => {
                        setAlert('false')
                    }, 5000);
                    setName('')
                    setEmail('')
                    setPhone('')
                    setDetail('')
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
    }

    const formvalidation = () => {
        const nameerr = {};
        const emailerr = {};
        const phoneerr = {};
        const detailerr = {};
        let isValid = true;

        if (Name.trim().length == 0) {
            nameerr.empty = 'name is empty';
            isValid = false;
        } else if (Name.trim().length < 3) {
            nameerr.short = 'name is to short';
            isValid = false;
        }
        numlist.forEach(element => {
            if (Name.includes(element)) {
                nameerr.num = 'your not allow to use numbers in your name';
                isValid = false;
            }
        });

        blacklist.forEach(element => {
            if (Name.includes(element)) {
                nameerr.sym = 'your not allow to use symbols in your name';
                isValid = false;
            }
        });

        if (Email.trim().length == 0) {
            emailerr.empty = 'email is empty';
            isValid = false;
        } else {
            blacklist.forEach(element => {
                if (Email.includes(element)) {
                    emailerr.sym = 'email is not valid';
                    isValid = false;
                }
            });
            if (!Email.includes('@')) {
                emailerr.sym = 'email is not valid';
                isValid = false;
            }
        }


        if (Phone.trim().length == 0) {
            phoneerr.empty = 'phone is empty';
            isValid = false;
        } else if (Phone.trim().length < 6) {
            phoneerr.short = 'phone is to short';
            isValid = false;
        } else {
            numlistfixed.forEach(element => {
                if (Phone.includes(element)) {
                    phoneerr.num = 'only use numberse';
                    isValid = false;
                }
            });
        }



        if (Detail.trim().length == 0) {
            detailerr.empty = 'Detail is empty';
            isValid = false;
        } else if (Detail.trim().length < 5) {
            detailerr.short = 'Detail is to short';
            isValid = false;
        } else {
            blacklist.forEach(element => {
                if (Detail.includes(element)) {
                    detailerr.sym = 'dont use symbols';
                    isValid = false;
                }
            });
        }


        setNameerr(nameerr);
        setEmailerr(emailerr);
        setPhoneerr(phoneerr);
        setDetailerr(detailerr);
        return isValid;

    }

    return (
        <div>
            <div className={Alert === 'true' ? 'Alert-active' : 'Alert'}>
                <span>form has been submited</span>
            </div>
            <div className="container">
                <form onSubmit={submit} id="contact" className="forminner" action method="post">
                    <h3>Quick Contact</h3>

                    <input value={Name} onChange={(e) => { setName(e.target.value) }} placeholder="name" type="text" tabIndex={1} />
                    {Object.keys(Nameerr).map((key) => {
                        return <div className='err'>{Nameerr[key]}</div>
                    })}

                    <input value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Address" type="text" tabIndex={2} />
                    {Object.keys(Emailerr).map((key) => {
                        return <div className='err'>{Emailerr[key]}</div>
                    })}

                    <input value={Phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone (optinal)" type="tel" tabIndex={3} />
                    {Object.keys(Phoneerr).map((key) => {
                        return <div className='err'>{Phoneerr[key]}</div>
                    })}

                    <textarea value={Detail} onChange={(e) => { setDetail(e.target.value) }} placeholder="detail" tabIndex={5} />
                    {Object.keys(Detailerr).map((key) => {
                        return <div className='err'>{Detailerr[key]}</div>
                    })}

                    <button name="submit" type="submit" className='formbtn' id="contact-submit" data-submit="...Sending">Submit</button>

                </form>
            </div>

        </div>
    );

};



export default Form;