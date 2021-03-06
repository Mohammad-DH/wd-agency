import React, { useState } from 'react';
import { db } from '../nav/firebase'

const Mform = () => {

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
                    alert('form has been submited')
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
            <div className="m-container">
                <h3>Quick Contact</h3>


                <form onSubmit={submit} className="m-forminner" action method="post">


                    <input onChange={(e) => { setName(e.target.value) }} placeholder="name" type="text" tabIndex={1} />
                    {Object.keys(Nameerr).map((key) => {
                        return <div className='m-err'>{Nameerr[key]}</div>
                    })}

                    <input onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Address" type="text" tabIndex={2} />
                    {Object.keys(Emailerr).map((key) => {
                        return <div className='m-err'>{Emailerr[key]}</div>
                    })}

                    <input onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone (optinal)" type="tel" tabIndex={3} />
                    {Object.keys(Phoneerr).map((key) => {
                        return <div className='m-err'>{Phoneerr[key]}</div>
                    })}

                    <textarea onChange={(e) => { setDetail(e.target.value) }} placeholder="detail" tabIndex={5} defaultValue={""} />
                    {Object.keys(Detailerr).map((key) => {
                        return <div className='m-err'>{Detailerr[key]}</div>
                    })}

                    <button name="submit" type="submit" className='m-formbtn' id="contact-submit" data-submit="...Sending">Submit</button>

                </form>
                <div className='m-so'>

                    <ul>
                        <li>
                            <a href="#">
                                <svg id="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.35 109.348">
                                    <path id="Path_15" data-name="Path 15" d="M322.568,275.456l-8.517-.194a12.462,12.462,0,0,0-12.741,12.476v8.076h-7.917a.588.588,0,0,0-.583.583V306.54a.588.588,0,0,0,.583.583h7.917V332.8a.588.588,0,0,0,.583.583h10.479a.588.588,0,0,0,.583-.583V307.14h7.97a.577.577,0,0,0,.583-.512l1.325-10.143a.6.6,0,0,0-.141-.459.574.574,0,0,0-.442-.194h-9.3v-5.125a5.917,5.917,0,0,1,1.078-3.923,3.2,3.2,0,0,1,2.509-.972h6.026a.588.588,0,0,0,.583-.583v-9.154a.62.62,0,0,0-.583-.619Z" transform="translate(-253.298 -249.656)" fill="#fff" />
                                    <path id="Path_14" data-name="Path 14" d="M346.311,370.118H303.936a33.522,33.522,0,0,1-33.486-33.486V294.256a33.522,33.522,0,0,1,33.486-33.486h42.375A33.522,33.522,0,0,1,379.8,294.256v42.375A33.522,33.522,0,0,1,346.311,370.118ZM303.936,264.834a29.457,29.457,0,0,0-29.422,29.422v42.375a29.457,29.457,0,0,0,29.422,29.422h42.375a29.457,29.457,0,0,0,29.422-29.422V294.256a29.457,29.457,0,0,0-29.422-29.422Z" transform="translate(-270.45 -260.77)" fill="#fff" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg id="insta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.35 109.35">
                                    <path id="Path_3" data-name="Path 3" d="M346.311,260.3H303.936a33.522,33.522,0,0,1-33.486-33.486V184.436a33.522,33.522,0,0,1,33.486-33.486h42.375A33.522,33.522,0,0,1,379.8,184.436v42.375A33.522,33.522,0,0,1,346.311,260.3ZM303.936,155a29.457,29.457,0,0,0-29.422,29.422V226.8a29.457,29.457,0,0,0,29.422,29.422h42.375A29.457,29.457,0,0,0,375.733,226.8V184.436a29.457,29.457,0,0,0-29.422-29.422H303.936Z" transform="translate(-270.45 -150.95)" fill="#fff" />
                                    <path id="Path_4" data-name="Path 4" d="M324.143,166.88H301.665a15.3,15.3,0,0,0-15.285,15.285v22.477a15.3,15.3,0,0,0,15.285,15.285h22.477a15.3,15.3,0,0,0,15.285-15.285V182.165a15.3,15.3,0,0,0-15.284-15.285ZM334,204.643a9.864,9.864,0,0,1-9.86,9.86H301.665a9.864,9.864,0,0,1-9.86-9.86V182.165a9.864,9.864,0,0,1,9.86-9.86h22.477a9.864,9.864,0,0,1,9.86,9.86Z" transform="translate(-258.23 -138.73)" fill="#fff" />
                                    <path id="Path_5" data-name="Path 5" d="M306.737,174.92a12.317,12.317,0,1,0,12.317,12.317A12.317,12.317,0,0,0,306.737,174.92Zm0,18.961a6.662,6.662,0,1,1,6.662-6.662A6.662,6.662,0,0,1,306.737,193.881Z" transform="translate(-252.063 -132.563)" fill="#fff" />
                                    <path id="Path_6" data-name="Path 6" d="M310.788,171.89a3.658,3.658,0,1,0,3.658,3.658A3.658,3.658,0,0,0,310.788,171.89Z" transform="translate(-242.313 -134.887)" fill="#fff" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg id="linked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.35 109.348">
                                    <path id="Path_11" data-name="Path 11" d="M346.311,479.948H303.936a33.522,33.522,0,0,1-33.486-33.486V404.086A33.522,33.522,0,0,1,303.936,370.6h42.375A33.522,33.522,0,0,1,379.8,404.086v42.375A33.522,33.522,0,0,1,346.311,479.948Zm-42.375-105.3a29.457,29.457,0,0,0-29.422,29.422v42.375a29.457,29.457,0,0,0,29.422,29.422h42.375a29.457,29.457,0,0,0,29.422-29.422V404.069a29.457,29.457,0,0,0-29.422-29.422Z" transform="translate(-270.45 -370.6)" fill="#fff" />
                                    <rect id="Rectangle_4" data-name="Rectangle 4" width="7.987" height="27.39" transform="translate(35.147 46.952)" fill="#fff" />
                                    <path id="Path_12" data-name="Path 12" d="M294.5,390.4a4.382,4.382,0,1,0,4.382,4.382A4.382,4.382,0,0,0,294.5,390.4Z" transform="translate(-255.361 -355.412)" fill="#fff" />
                                    <path id="Path_13" data-name="Path 13" d="M317.505,397.419c-7.439-2.1-11.38,2.916-11.38,2.916h0l-.99-3.6H297.82V424.92h8.57V408.2a4.532,4.532,0,0,1,4.524-4.524h0a4.533,4.533,0,0,1,4.524,4.524v16.717h8.57V410.831C324.008,410.814,324.945,399.5,317.505,397.419Z" transform="translate(-249.455 -350.556)" fill="#fff" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg id="telegram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.347 109.348">
                                    <path id="Path_38" data-name="Path 38" d="M126.661,150.468H84.286A33.522,33.522,0,0,1,50.8,116.981V74.606A33.522,33.522,0,0,1,84.286,41.12h42.375a33.522,33.522,0,0,1,33.486,33.486v42.375a33.522,33.522,0,0,1-33.486,33.487ZM84.286,45.184A29.457,29.457,0,0,0,54.864,74.606v42.375A29.457,29.457,0,0,0,84.286,146.4h42.375a29.457,29.457,0,0,0,29.422-29.422V74.606a29.457,29.457,0,0,0-29.422-29.422Z" transform="translate(-50.8 -41.12)" fill="#fff" />
                                    <path id="Path_39" data-name="Path 39" d="M110.705,57.2,69.9,80.768a4.343,4.343,0,0,0,.742,7.864L81.46,92.4l24.492-19.2L88.97,94.993v12.67a1.517,1.517,0,0,0,2.562,1.1l6.379-6.079,8.111,7.386a4.338,4.338,0,0,0,7.245-2.845l3.941-45.891a4.345,4.345,0,0,0-6.5-4.134Z" transform="translate(-37.813 -29.24)" fill="#fff" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg id="whatsapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.347 109.348">
                                    <g id="Group_39" data-name="Group 39">
                                        <path id="Path_40" data-name="Path 40" d="M456.141,150.468H413.766a33.522,33.522,0,0,1-33.486-33.486V74.606A33.522,33.522,0,0,1,413.766,41.12h42.375a33.522,33.522,0,0,1,33.486,33.486v42.375a33.522,33.522,0,0,1-33.486,33.487ZM413.766,45.184a29.457,29.457,0,0,0-29.422,29.422v42.375A29.457,29.457,0,0,0,413.766,146.4h42.375a29.457,29.457,0,0,0,29.422-29.422V74.606a29.457,29.457,0,0,0-29.422-29.422Z" transform="translate(-380.28 -41.12)" fill="#fff" />
                                    </g>
                                    <g id="Group_42" data-name="Group 42" transform="translate(23.008 23.025)">
                                        <g id="Group_40" data-name="Group 40" transform="translate(17.562 17.264)">
                                            <path id="Path_41" data-name="Path 41" d="M430.649,85.019,425.1,82.474a1.514,1.514,0,0,0-1.52.141l-2.191,1.573a2.138,2.138,0,0,1-2.262.159A69.821,69.821,0,0,1,411.3,76.5a2.138,2.138,0,0,1,.159-2.262l1.573-2.191a1.514,1.514,0,0,0,.141-1.52l-2.545-5.549a1.826,1.826,0,0,0-1.661-1.06h-1.838a1.742,1.742,0,0,0-.672.124c-3.428,1.467-3.216,5.725-3.216,5.725,0,6.309,5.231,12.14,7.722,14.561,2.174,2.3,8.27,8.093,14.914,8.093,0,0,4.241.212,5.725-3.216a1.743,1.743,0,0,0,.124-.671V86.68a1.842,1.842,0,0,0-1.077-1.661Z" transform="translate(-403.239 -63.92)" fill="#fff" />
                                        </g>
                                        <g id="Group_41" data-name="Group 41">
                                            <path id="Path_42" data-name="Path 42" d="M393.3,117.465l5.513-17.194a30.826,30.826,0,1,1,11.681,11.7Zm17.918-11.539,1.078.671a25.4,25.4,0,1,0-8.146-8.146l.672,1.078-3,9.383Z" transform="translate(-393.3 -54.15)" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg id="youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.347 109.348">
                                    <path id="Path_7" data-name="Path 7" d="M236.481,370.118H194.106a33.522,33.522,0,0,1-33.486-33.486V294.256a33.522,33.522,0,0,1,33.486-33.486h42.375a33.522,33.522,0,0,1,33.486,33.486v42.375a33.511,33.511,0,0,1-33.486,33.487ZM194.106,264.834a29.457,29.457,0,0,0-29.422,29.422v42.375a29.457,29.457,0,0,0,29.422,29.422h42.375A29.457,29.457,0,0,0,265.9,336.631V294.256a29.457,29.457,0,0,0-29.422-29.422Z" transform="translate(-160.62 -260.77)" fill="#fff" />
                                    <path id="Path_8" data-name="Path 8" d="M222.868,278.94H186.4a11.878,11.878,0,0,0-11.875,11.875v21.4A11.878,11.878,0,0,0,186.4,324.09h36.473a11.878,11.878,0,0,0,11.875-11.875v-21.4a11.878,11.878,0,0,0-11.875-11.875ZM197.227,311.4V291.592a2.022,2.022,0,0,1,3.057-1.732l16.558,9.9a2.019,2.019,0,0,1,0,3.463l-16.558,9.9a2,2,0,0,1-3.057-1.723Z" transform="translate(-149.957 -246.832)" fill="#fff" />
                                </svg>
                            </a>
                        </li>
                    </ul>


                </div>
            </div>

        </div>
    );

};



export default Mform;