import React from 'react'
import '../components/portfolio.css'
import linkedin from '../assets/linkedin3.gif'
import github from '../assets/github.gif'
import css from '../assets/css.png'
import html from '../assets/html.png'
import bootstrap from '../assets/bootstrap.png'
import js from '../assets/js.png'
import rct from '../assets/reactjs.png'
import figma from '../assets/figma.png'
import gitlogo from '../assets/git.png'


export default function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='backgound'></div>
            <div className='home-content'>
                <p>Hi There</p>
                <h1>I'm <span>AFIKA SHWASHWA</span></h1>
                <p>A software developer  currently  specializing in front-end mobile and web development </p>
                <div className='btn-icons'>
                    <button className='btn'>Resume</button>
                    <div className="icons">
                        <img className="git-hub" alt="Github link" src={github} />
                        <img className="linkedin" alt="Linkedin link" src={linkedin} />
                    </div>

                </div>
                <div className='skillset'>
                    <p>Tech Stack</p>
                    <p>
                        <span className='home-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="53" viewBox="0 0 55 52" fill="none">
                                <path d="M10.144 44.2016L6.28198 3.25H48.7179L44.8507 44.1951L27.4742 48.75L10.144 44.2016Z" fill="#E44F26" />
                                <path d="M27.5 45.2693L41.5422 41.5886L44.8456 6.59912H27.5V45.2693Z" fill="#F1662A" />
                                <path d="M27.5 21.7864H20.4703L19.9856 16.6432H27.5V11.6204H14.1797L14.3069 12.9691L15.6114 26.8092H27.5V21.7864ZM27.5 34.8302L27.4759 34.8367L21.56 33.3271L21.1819 29.3215H15.8486L16.5928 37.206L27.4759 40.0627L27.5 40.0562V34.8302Z" fill="#EBEBEB" />
                                <path d="M27.4812 21.7864V26.8092H34.0228L33.4075 33.3239L27.4812 34.8351V40.0611L38.3729 37.206L38.452 36.3577L39.6998 23.1351L39.8304 21.7864H27.4812ZM27.4812 11.6204V16.6432H40.3134L40.42 15.5155L40.6623 12.9691L40.7895 11.6204H27.4812Z" fill="white" />
                            </svg>
                        </span>
                        <span className='home-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="53" viewBox="0 0 55 52" fill="none">
                                <g clip-path="url(#clip0_241_182)">
                                    <path d="M41.9297 0.223389H13.2471C6.25845 0.223389 0.593018 5.56814 0.593018 12.1612V39.2203C0.593018 45.8134 6.25845 51.1582 13.2471 51.1582H41.9297C48.9184 51.1582 54.5838 45.8134 54.5838 39.2203V12.1612C54.5838 5.56814 48.9184 0.223389 41.9297 0.223389Z" fill="url(#paint0_linear_241_182)" />
                                    <g filter="url(#filter0_d_241_182)">
                                        <path d="M28.4257 39.2516C34.6845 39.2516 38.456 36.3604 38.456 31.5921C38.456 27.9874 35.7651 25.378 31.7692 24.9648V24.8148C34.7049 24.3641 37.0086 21.7921 37.0086 18.9199C37.0086 14.8272 33.5838 12.1613 28.3646 12.1613H16.6216V39.2516H28.4257ZM21.1882 15.5968H27.2637C30.5664 15.5968 32.4419 16.9861 32.4419 19.5018C32.4419 22.1865 30.2606 23.6882 26.3056 23.6882H21.1882V15.5968ZM21.1882 35.8161V26.8987H27.2228C31.545 26.8987 33.7875 28.4005 33.7875 31.3292C33.7875 34.2578 31.6061 35.8161 27.4879 35.8161H21.1882Z" fill="url(#paint1_linear_241_182)" />
                                        <path d="M28.4257 39.2516C34.6845 39.2516 38.456 36.3604 38.456 31.5921C38.456 27.9874 35.7651 25.378 31.7692 24.9648V24.8148C34.7049 24.3641 37.0086 21.7921 37.0086 18.9199C37.0086 14.8272 33.5838 12.1613 28.3646 12.1613H16.6216V39.2516H28.4257ZM21.1882 15.5968H27.2637C30.5664 15.5968 32.4419 16.9861 32.4419 19.5018C32.4419 22.1865 30.2606 23.6882 26.3056 23.6882H21.1882V15.5968ZM21.1882 35.8161V26.8987H27.2228C31.545 26.8987 33.7875 28.4005 33.7875 31.3292C33.7875 34.2578 31.6061 35.8161 27.4879 35.8161H21.1882Z" stroke="white" stroke-width="2" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_241_182" x="-0.378418" y="-0.838745" width="55.8345" height="61.0903" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_241_182" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_241_182" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_241_182" x1="0.593018" y1="0.223389" x2="51.4415" y2="54.1227" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9013FE" />
                                        <stop offset="1" stop-color="#6B11F4" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_241_182" x1="18.6869" y1="13.9444" x2="30.8103" y2="35.6781" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" />
                                        <stop offset="1" stop-color="#F1E5FC" />
                                    </linearGradient>
                                    <clipPath id="clip0_241_182">
                                        <rect x="0.593018" y="0.223389" width="53.9908" height="50.9348" rx="10" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className='home-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="53" viewBox="0 0 55 53" fill="none">
                                <g filter="url(#filter0_i_241_190)">
                                    <g clip-path="url(#clip0_241_190)">
                                        <path d="M0.593018 0.895142H54.5838V52.5704H0.593018V0.895142Z" fill="#F7DF1E" />
                                        <path d="M14.7893 44.0788L18.9208 41.6855C19.718 43.0382 20.4431 44.1827 22.1824 44.1827C23.8496 44.1827 24.901 43.5586 24.901 41.1306V24.6192H29.9746V41.1993C29.9746 46.2289 26.8942 48.5184 22.3999 48.5184C18.3411 48.5184 15.9851 46.5065 14.7891 44.0783M32.7305 43.5584L36.8616 41.2691C37.9492 42.9689 39.3627 44.2176 41.8631 44.2176C43.9656 44.2176 45.3061 43.2116 45.3061 41.824C45.3061 40.1591 43.9289 39.5693 41.6094 38.5983L40.3413 38.0776C36.6806 36.5864 34.2525 34.7132 34.2525 30.7589C34.2525 27.1166 37.1518 24.3414 41.6822 24.3414C44.9077 24.3414 47.2272 25.4169 48.8942 28.2266L44.9436 30.6549C44.0736 29.1634 43.1317 28.5738 41.682 28.5738C40.196 28.5738 39.2536 29.4756 39.2536 30.6549C39.2536 32.1117 40.196 32.7017 42.3704 33.6036L43.6387 34.1238C47.9516 35.8931 50.3798 37.6967 50.3798 41.7548C50.3798 46.1258 46.7919 48.519 41.9717 48.519C37.2604 48.519 34.2161 46.3684 32.7303 43.5586" fill="black" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_i_241_190" x="0.593018" y="0.895142" width="53.9907" height="55.6753" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_241_190" />
                                    </filter>
                                    <clipPath id="clip0_241_190">
                                        <rect x="0.593018" y="0.895142" width="53.9908" height="51.6752" rx="10" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className='home-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="53" viewBox="0 0 54 52" fill="none">
                                <g clip-path="url(#clip0_413_50)">
                                    <path d="M7.93557 46.0772L3.69482 0.545898H50.2949L46.05 46.0703L26.9666 51.1346L7.93557 46.0772Z" fill="#1572B6" />
                                    <path d="M26.9954 47.2638L42.4158 43.1714L46.0437 4.26843H26.9954V47.2638Z" fill="#33A9DC" />
                                    <path d="M26.9954 20.7645H34.7151L35.2482 15.0462H26.9954V9.46191H41.6241L41.4841 10.9602L40.05 26.3488H26.9954V20.7645Z" fill="white" />
                                    <path d="M27.0301 35.2672L27.0044 35.2744L20.5074 33.5952L20.092 29.1415H14.2366L15.0536 37.9097L27.0035 41.0844L27.0301 41.0771V35.2672Z" fill="#EBEBEB" />
                                    <path d="M34.2191 26.1125L33.5164 33.5908L27.0098 35.272V41.082L38.9694 37.9093L39.0571 36.9658L40.072 26.1125H34.2191Z" fill="white" />
                                    <path d="M27.0152 9.46191V15.0462H12.9238L12.807 13.7913L12.5412 10.9602L12.4016 9.46191H27.0152ZM26.9954 20.7653V26.3496H20.5803L20.4634 25.0947L20.1973 22.2636L20.0581 20.7653H26.9954Z" fill="#EBEBEB" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_413_50">
                                        <rect width="53.99" height="51.68" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className='home-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="53" viewBox="0 0 128 128" fill="none">
                                <path d="M63.9999 75.4C70.2959 75.4 75.3999 70.296 75.3999 64C75.3999 57.7039 70.2959 52.6 63.9999 52.6C57.7038 52.6 52.5999 57.7039 52.5999 64C52.5999 70.296 57.7038 75.4 63.9999 75.4Z" fill="#61DAFB" />
                                <path d="M107.3 45.2C105.1 44.4 102.8 43.6 100.4 42.9C101 40.5 101.5 38.1 101.9 35.8C104 22.6 101.7 13.3 95.2999 9.69998C93.3999 8.59997 91.2999 8.09998 88.8999 8.09998C81.8999 8.09998 72.9999 13.3 63.9999
                                 22C54.9999 13.3 46.0999 8.09998 39.0999 8.09998C36.6999 8.09998 34.5999 8.59997 32.6999 9.69998C26.2999 13.4 23.9999 22.7 26.0999 35.8C26.4999 38.1 26.9999 40.5 27.5999 42.9C25.1999 43.6 22.8999 44.3 20.6999 
                                 45.2C8.1999 50 1.3999 56.6 1.3999 64C1.3999 71.4 8.2999 78 20.6999 82.8C22.8999 83.6 25.1999 84.4 27.5999 85.1C26.9999 87.5 26.4999 89.9 26.0999 92.2C23.9999 105.4 26.2999 114.7 32.6999 118.3C34.5999 119.4 
                                 36.6999 119.9 39.0999 119.9C46.1999 119.9 55.0999 114.7 63.9999 106C72.9999 114.7 81.8999 119.9 88.8999 119.9C91.2999 119.9 93.3999 119.4 95.2999 118.3C101.7 114.6 104 105.3 101.9 92.2C101.5 89.9 101 87.5 
                                 100.4 85.1C102.8 84.4 105.1 83.7 107.3 82.8C119.8 78 126.6 71.4 126.6 64C126.6 56.6 119.8 50 107.3 45.2ZM92.4999 14.7C96.5999 17.1 97.9999 24.5 96.2999 35C95.9999 37.1 95.4999 39.3 94.8999 41.6C89.6999 40.4 
                                 84.1999 39.6 78.3999 39.1C74.9999 34.3 71.4999 30 67.9999 26.1C75.3999 18.8 82.8999 13.8 88.9999 13.8C90.2999 13.8 91.4999 14.1 92.4999 14.7ZM81.2999 74C79.4999 77.2 77.3999 80.4 75.1999 83.6C71.4999 83.9 
                                 67.7999 84 63.9999 84C60.0999 84 56.3999 83.9 52.7999 83.6C50.5999 80.4 48.5999 77.2 46.7999 74C44.8999 70.7 43.0999 67.3 41.4999 64C43.0999 60.7 44.8999 57.3 46.7999 54C48.5999 50.8 50.6999 47.6 52.8999 
                                 44.4C56.5999 44.1 60.2999 44 64.0999 44C67.9999 44 71.6999 44.1 75.2999 44.4C77.4999 47.6 79.4999 50.8 81.2999 54C83.1999 57.3 84.9999 60.7 86.5999 64C84.8999 67.3 83.1999 70.6 81.2999 74ZM89.5999 70.7C91.0999 
                                 74.2 92.2999 77.6 93.3999 81C89.9999 81.8 86.3999 82.4 82.5999 82.9C83.7999 81 85.0999 79 86.1999 76.9C87.3999 74.8 88.4999 72.7 89.5999 70.7ZM63.9999 97.8C61.5999 95.2 59.2999 92.4 57.0999 89.5C59.3999 89.6 61.6999 
                                 89.7 63.9999 89.7C66.2999 89.7 68.5999 89.6 70.8999 89.5C68.6999 92.4 66.3999 95.2 63.9999 97.8ZM45.3999 82.8C41.5999 82.3 37.9999 81.7 34.5999 80.9C35.6999 77.6 36.8999 74.1 38.3999 70.6C39.4999 72.6 40.5999 74.7 
                                 41.7999 76.7C42.9999 78.9 44.1999 80.8 45.3999 82.8ZM38.3999 57.3C36.8999 53.8 35.6999 50.4 34.5999 47C37.9999 46.2 41.5999 45.6 45.3999 45.1C44.1999 47 42.8999 49 41.7999 51.1C40.5999 53.2 39.4999 55.3 38.3999 
                                 57.3ZM63.9999 30.2C66.3999 32.8 68.6999 35.6 70.8999 38.5C68.5999 38.4 66.2999 38.3 63.9999 38.3C61.6999 38.3 59.3999 38.4 57.0999 38.5C59.2999 35.6 61.5999 32.8 63.9999 30.2ZM86.1999 51.2L82.5999 45.2C86.3999 
                                 45.7 89.9999 46.3 93.3999 47.1C92.2999 50.4 91.0999 53.9 89.5999 57.4C88.4999 55.3 87.3999 53.2 86.1999 51.2ZM31.6999 35C29.9999 24.5 31.3999 17.1 35.4999 14.7C36.4999 14.1 37.6999 13.8 38.9999 13.8C44.9999 13.8 
                                 52.4999 18.7 59.9999 26.1C56.4999 29.9 52.9999 34.3 49.5999 39.1C43.7999 39.6 38.2999 40.5 33.0999 41.6C32.4999 39.3 32.0999 37.1 31.6999 35ZM6.9999 64C6.9999 59.3 12.6999 54.3 22.6999 50.6C24.6999 49.8 26.8999 
                                 49.1 29.0999 48.5C30.6999 53.5 32.6999 58.8 35.0999 64.1C32.6999 69.4 30.5999 74.6 29.0999 79.6C15.2999 75.6 6.9999 69.6 6.9999 64ZM35.4999 113.3C31.3999 110.9 29.9999 103.5 31.6999 93C31.9999 90.9 32.4999 88.7 
                                 33.0999 86.4C38.2999 87.6 43.7999 88.4 49.5999 88.9C52.9999 93.7 56.4999 98 59.9999 101.9C52.5999 109.2 45.0999 114.2 38.9999 114.2C37.6999 114.2 36.4999 113.9 35.4999 113.3ZM96.2999 93C97.9999 103.5 96.5999 
                                 110.9 92.4999 113.3C91.4999 113.9 90.2999 114.2 88.9999 114.2C82.9999 114.2 75.4999 109.3 67.9999 101.9C71.4999 98.1 74.9999 93.7 78.3999 88.9C84.1999 88.4 89.6999 87.5 94.8999 86.4C95.4999 88.7 95.8999 90.9 
                                 96.2999 93ZM105.3 77.4C103.3 78.2 101.1 78.9 98.8999 79.5C97.2999 74.5 95.2999 69.2 92.8999 63.9C95.2999 58.6 97.3999 53.4 98.8999 48.4C112.7 52.4 121 58.4 121 64C121 68.7 115.2 73.7 105.3 77.4Z" fill="#61DAFB" />
                            </svg>
                        </span>


                        <span className='home-icons'><svg xmlns="http://www.w3.org/2000/svg" width="55" height="53" viewBox="0 0 55 55" fill="none">
                            <g clip-path="url(#clip0_241_213)">
                                <path d="M14.3929 54.13C21.8628 54.13 27.9254 50.0883 27.9254 45.1083V36.0867H14.3929C6.92291 36.0867 0.860352 40.1284 0.860352 45.1083C0.860352 50.0883 6.92291 54.13 14.3929 54.13Z" fill="#0ACF83" />
                                <path d="M0.860352 27.065C0.860352 22.085 6.92291 18.0433 14.3929 18.0433H27.9254V36.0867H14.3929C6.92291 36.0867 0.860352 32.045 0.860352 27.065Z" fill="#A259FF" />
                                <path d="M0.860352 9.02167C0.860352 4.04171 6.92291 0 14.3929 0H27.9254V18.0433H14.3929C6.92291 18.0433 0.860352 14.0016 0.860352 9.02167Z" fill="#F24E1E" />
                                <path d="M27.9253 0H41.4578C48.9277 0 54.9903 4.04171 54.9903 9.02167C54.9903 14.0016 48.9277 18.0433 41.4578 18.0433H27.9253V0Z" fill="#FF7262" />
                                <path d="M54.9903 27.065C54.9903 32.045 48.9277 36.0867 41.4578 36.0867C33.9879 36.0867 27.9253 32.045 27.9253 27.065C27.9253 22.085 33.9879 18.0433 41.4578 18.0433C48.9277 18.0433 54.9903 22.085 54.9903 27.065Z" fill="#1ABCFE" />
                            </g>
                            <defs>
                                <clipPath id="clip0_241_213">
                                    <rect x="0.860352" width="54.13" height="54" rx="10" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></span>
                        <span className='home-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="53" viewBox="0 0 128 128" fill="none">
                                <g clip-path="url(#clip0_414_68)">
                                    <path d="M124.737 58.378L69.621 3.26405C66.449 0.090045 61.301 0.090045 58.124 3.26405L46.68 14.71L61.198 29.228C64.573 28.089 68.441 28.853 71.13 31.542C73.833 34.248 74.591 38.149 73.424 41.535L87.416 55.528C90.801 54.361 94.708 55.115 97.41 57.823C101.19 61.6 101.19 67.723 97.41 71.502C96.5117 72.4008 95.4452 73.1137 94.2713 73.6001C93.0974 74.0865 91.8392 74.3369 90.5685 74.3369C89.2978 74.3369 88.0396 74.0865 86.8657 73.6001C85.6919 73.1137 84.6253 72.4008 83.727 71.502C82.3774 70.1516 81.4574 68.4321 81.0829 66.56C80.7083 64.6879 80.8959 62.7468 81.622 60.981L68.574 47.933L68.572 82.274C69.5187 82.7403 70.383 83.3577 71.131 84.102C74.909 87.879 74.909 94 71.131 97.785C67.352 101.562 61.227 101.562 57.452 97.785C53.674 94.001 53.674 87.88 57.452 84.102C58.3572 83.1955 59.4338 82.4782 60.619 81.992V47.333C59.4328 46.8483 58.3559 46.1304 57.452 45.222C54.59 42.362 53.901 38.162 55.369 34.646L41.056 20.333L3.26401 58.123C1.73933 59.6482 0.882812 61.7165 0.882812 63.873C0.882813 66.0296 1.73933 68.0979 3.26401 69.623L58.381 124.737C61.555 127.911 66.701 127.911 69.88 124.737L124.738 69.879C126.262 68.3535 127.119 66.285 127.118 64.1283C127.118 61.9717 126.262 59.9034 124.737 58.378Z" fill="#F34F29" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_414_68">
                                        <rect width="128" height="128" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </span>
                        <span className='home-icons'></span>
                    </p>

                </div>
            </div>

        </div>
    )
}

