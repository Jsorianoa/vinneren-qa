import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import './footer.css'
import { ReactComponent as AnvoIcon } from '../../img/afiliado-amvo.svg'
const Footer = () => {
  const intl = useIntl()
  return (
    <div className="footer-wrapper">
      <div className="vinn">
        <svg
          width="160"
          height="40"
          viewBox="0 0 160 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_286_11574)">
            <path
              d="M7.94955 25.8142H5.30691L0 9.49707H3.95916L7.94955 21.6941L11.9399 9.49707H15.8967L10.5874 25.8142H7.94955Z"
              fill="white"
            />
            <path
              d="M22.5273 9.49707V25.8142H18.6018V9.49707H22.5273Z"
              fill="white"
            />
            <path
              d="M32.7904 9.0791C32.8553 9.0791 33.0835 9.09111 33.4823 9.11033C33.958 9.14811 34.4279 9.23999 34.8829 9.38421C35.4788 9.57162 36.0518 9.82547 36.591 10.141C37.2394 10.5244 37.8099 11.0265 38.2727 11.6208C38.833 12.3517 39.2622 13.1744 39.5411 14.0521C39.9032 15.2237 40.072 16.4466 40.0408 17.6725V25.8142H36.1033V17.6725C36.1022 17.1894 36.0605 16.7072 35.9784 16.2311C35.8998 15.7552 35.7371 15.2972 35.4979 14.8785C35.2544 14.4634 34.9118 14.1151 34.5009 13.8647C33.9714 13.6009 33.3879 13.4636 32.7964 13.4636C32.2048 13.4636 31.6214 13.6009 31.0919 13.8647C30.6803 14.115 30.3369 14.4633 30.0925 14.8785C29.8532 15.2972 29.6905 15.7552 29.612 16.2311C29.5284 16.707 29.485 17.1892 29.4823 17.6725V25.8142H25.5495V17.6725C25.5184 16.4466 25.6872 15.2237 26.0492 14.0521C26.3278 13.1733 26.7588 12.3503 27.3225 11.6208C27.7834 11.0246 28.3543 10.5223 29.0042 10.141C29.5418 9.82556 30.1131 9.57171 30.7075 9.38421C31.1571 9.24149 31.6212 9.14963 32.0913 9.11033C32.4709 9.09111 32.7063 9.0791 32.7904 9.0791Z"
              fill="white"
            />
            <path
              d="M50.1694 9.0791C50.2342 9.0791 50.4625 9.09111 50.8613 9.11033C51.337 9.14833 51.8069 9.24021 52.2619 9.38421C52.8572 9.57122 53.4294 9.82509 53.9676 10.141C54.6166 10.5236 55.1872 11.0257 55.6493 11.6208C56.2104 12.3516 56.6404 13.1742 56.9201 14.0521C57.2814 15.2239 57.4493 16.4467 57.4174 17.6725V25.8142H53.4823V17.6725C53.4812 17.1894 53.4394 16.7072 53.3574 16.2311C53.2777 15.7555 53.1151 15.2977 52.8769 14.8785C52.6327 14.4639 52.2903 14.1157 51.8799 13.8647C51.35 13.6009 50.7661 13.4635 50.1742 13.4635C49.5822 13.4635 48.9984 13.6009 48.4685 13.8647C48.0574 14.1157 47.7142 14.4639 47.4691 14.8785C47.2307 15.2976 47.0681 15.7555 46.9886 16.2311C46.905 16.707 46.8616 17.1892 46.8588 17.6725V25.8142H42.9285V17.6725C42.8978 16.4468 43.0658 15.2241 43.4258 14.0521C43.7063 13.1741 44.1371 12.3514 44.6991 11.6208C45.1606 11.0252 45.7313 10.523 46.3808 10.141C46.9194 9.82594 47.4915 9.57211 48.0865 9.38421C48.536 9.24127 49.0002 9.1494 49.4703 9.11033C49.8474 9.09111 50.0853 9.0791 50.1694 9.0791Z"
              fill="white"
            />
            <path
              d="M75.4619 15.5798C75.5051 15.9017 75.5436 16.2332 75.5772 16.5767C75.6108 16.9203 75.6252 17.2975 75.6252 17.6722V18.2584H64.3604C64.4036 18.6236 64.4589 18.9936 64.5237 19.3683C64.5895 19.7488 64.6966 20.121 64.8432 20.4782C65.0893 21.0488 65.4633 21.5552 65.9363 21.9581C66.4312 22.3882 67.1159 22.602 67.9952 22.602C68.8745 22.602 69.564 22.3882 70.0565 21.9581C70.5315 21.5566 70.9066 21.0499 71.152 20.4782H75.3345C75.1893 21.1636 74.9466 21.8245 74.6138 22.441C74.3298 22.9608 73.9846 23.4447 73.5856 23.8825C73.2328 24.2731 72.8287 24.6141 72.3844 24.8963C71.9842 25.1489 71.5649 25.3697 71.1303 25.5569C70.0103 25.9877 68.813 26.1806 67.6144 26.1236C66.4158 26.0665 65.2422 25.7606 64.1682 25.2254C63.6679 24.9484 63.1983 24.619 62.7676 24.2428C62.2802 23.8148 61.867 23.309 61.5447 22.7461C61.1623 22.0681 60.8753 21.3405 60.6919 20.584C60.4637 19.6257 60.3556 18.6428 60.37 17.6578C60.3554 16.6721 60.4636 15.6884 60.6919 14.7293C60.879 13.9739 61.1658 13.2468 61.5447 12.5671C61.8685 11.9996 62.2814 11.4877 62.7676 11.0512C63.1951 10.6668 63.665 10.3324 64.1682 10.0542C65.3508 9.43822 66.6618 9.10903 67.9952 9.09326C69.1372 9.12792 70.2622 9.37901 71.3105 9.8332C71.7675 10.0377 72.2042 10.2846 72.615 10.5707C73.073 10.9006 73.485 11.29 73.8402 11.7287C74.2408 12.2307 74.5751 12.7822 74.8348 13.3695C75.1456 14.0735 75.3567 14.8174 75.4619 15.5798ZM71.409 15.5798C71.2984 15.2277 71.1644 14.8833 71.0078 14.5491C70.8429 14.2027 70.6194 13.8873 70.3472 13.617C70.0612 13.3325 69.7215 13.1079 69.3478 12.9563C68.4753 12.636 67.5175 12.636 66.645 12.9563C66.2727 13.1092 65.9339 13.3336 65.6481 13.617C65.3737 13.8888 65.1456 14.2037 64.973 14.5491C64.8073 14.8774 64.6783 15.2231 64.5886 15.5798H71.409Z"
              fill="white"
            />
            <path
              d="M78.6162 14.261C78.6162 13.1463 78.8565 12.2694 79.3225 11.6376C79.7344 11.0565 80.2609 10.566 80.8697 10.1962C81.5623 9.80486 82.3307 9.56648 83.1231 9.49707H87.6276V13.3914H84.603C84.2411 13.3767 83.8815 13.4544 83.558 13.6172C83.322 13.7387 83.1097 13.9015 82.9309 14.0977C82.7613 14.304 82.6391 14.5452 82.573 14.804V25.8118H78.6162V14.261Z"
              fill="white"
            />
            <path
              d="M104.553 15.5798C104.598 15.9017 104.634 16.2332 104.668 16.5767C104.702 16.9203 104.716 17.2975 104.716 17.6722V18.2584H93.4535C93.4943 18.6236 93.5496 18.9936 93.6144 19.3683C93.6807 19.7464 93.7878 20.1161 93.9339 20.471C94.1793 21.0427 94.5543 21.5493 95.0294 21.9509C95.5219 22.381 96.2114 22.5948 97.0907 22.5948C97.97 22.5948 98.6547 22.381 99.1495 21.9509C99.6232 21.5486 99.9974 21.0421 100.243 20.471H104.428C104.158 21.7447 103.551 22.9226 102.671 23.8825C102.319 24.2736 101.915 24.6148 101.47 24.8963C101.07 25.1493 100.651 25.3703 100.216 25.5569C99.0966 25.9873 97.8996 26.1801 96.7015 26.123C95.5033 26.066 94.3301 25.7603 93.2565 25.2254C92.7573 24.9477 92.2887 24.6183 91.8583 24.2428C91.3722 23.8135 90.9593 23.308 90.6354 22.7461C90.2517 22.0689 89.9655 21.3411 89.785 20.584C89.5549 19.626 89.4459 18.6429 89.4607 17.6578C89.4457 16.6719 89.5547 15.688 89.785 14.7293C89.9692 13.9734 90.2553 13.246 90.6354 12.5671C90.9607 12.0006 91.3734 11.489 91.8583 11.0512C92.2854 10.6674 92.7544 10.333 93.2565 10.0542C94.4445 9.43642 95.7613 9.10721 97.1003 9.09326C98.2414 9.12874 99.3655 9.3798 100.413 9.8332C100.867 10.0387 101.3 10.2856 101.708 10.5707C102.166 10.8995 102.578 11.289 102.931 11.7287C103.332 12.2307 103.666 12.7822 103.926 13.3695C104.239 14.0727 104.45 14.817 104.553 15.5798ZM100.502 15.5798C100.39 15.228 100.255 14.8838 100.099 14.5491C99.9336 14.2027 99.7101 13.8873 99.4378 13.617C99.1519 13.3336 98.8132 13.1092 98.4408 12.9563C97.5684 12.636 96.6106 12.636 95.7381 12.9563C95.3647 13.1086 95.0251 13.3331 94.7387 13.617C94.4644 13.8888 94.2363 14.2037 94.0637 14.5491C93.8959 14.8765 93.7669 15.2224 93.6793 15.5798H100.502Z"
              fill="white"
            />
            <path
              d="M114.016 9.0791C114.08 9.0791 114.309 9.09111 114.708 9.11033C115.183 9.14811 115.653 9.23999 116.108 9.38421C116.703 9.5708 117.274 9.8247 117.811 10.141C118.461 10.5231 119.032 11.0253 119.493 11.6208C120.054 12.352 120.485 13.1745 120.766 14.0521C121.126 15.2241 121.294 16.4468 121.264 17.6725V25.8142H117.331V17.6725C117.329 17.1892 117.286 16.7069 117.201 16.2311C117.123 15.7552 116.96 15.2972 116.721 14.8785C116.477 14.4646 116.135 14.1165 115.726 13.8647C115.196 13.6009 114.612 13.4635 114.02 13.4635C113.428 13.4635 112.845 13.6009 112.315 13.8647C111.903 14.1157 111.559 14.4638 111.313 14.8785C111.074 15.2972 110.911 15.7552 110.832 16.2311C110.748 16.7069 110.704 17.1892 110.703 17.6725V25.8142H106.775V17.6725C106.744 16.4468 106.912 15.2241 107.272 14.0521C107.553 13.1746 107.983 12.3522 108.543 11.6208C109.005 11.026 109.576 10.5239 110.225 10.141C110.762 9.82426 111.333 9.57035 111.928 9.38421C112.378 9.24149 112.842 9.14963 113.312 9.11033C113.696 9.09111 113.929 9.0791 114.016 9.0791Z"
              fill="white"
            />
            <path
              d="M149.091 26.9624L144.01 21.8813C143.598 22.4873 143.045 22.9834 142.398 23.3263C141.751 23.6692 141.03 23.8485 140.298 23.8485C139.566 23.8485 138.844 23.6692 138.197 23.3263C137.55 22.9834 136.997 22.4873 136.586 21.8813L125.122 33.348C124.549 33.9975 124.246 34.8408 124.273 35.7063C124.3 36.5718 124.656 37.3944 125.268 38.0067C125.88 38.619 126.703 38.9749 127.568 39.0021C128.434 39.0292 129.277 38.7255 129.927 38.1528L140.3 27.8009L144.279 31.7768C144.928 32.3496 145.771 32.6532 146.637 32.6261C147.502 32.5989 148.325 32.243 148.937 31.6307C149.55 31.0184 149.906 30.1958 149.933 29.3303C149.96 28.4648 149.656 27.6215 149.083 26.972"
              fill="#A3E7FF"
            />
            <path
              d="M158.881 29.9411L148.519 19.5796L152.495 15.6156C152.831 15.3048 153.101 14.9293 153.289 14.5116C153.477 14.0939 153.578 13.6427 153.587 13.1849C153.597 12.7271 153.513 12.2721 153.343 11.8472C153.172 11.4223 152.917 11.0362 152.594 10.712C152.271 10.3878 151.885 10.1322 151.461 9.96043C151.036 9.78869 150.581 9.70434 150.124 9.71245C149.666 9.72055 149.214 9.82094 148.796 10.0076C148.378 10.1943 148.002 10.4634 147.69 10.7988L142.811 15.6565C143.439 16.0814 143.949 16.6591 144.293 17.3352C144.637 18.0113 144.804 18.7637 144.777 19.5218C144.751 20.2799 144.532 21.0189 144.142 21.6694C143.752 22.3199 143.203 22.8606 142.547 23.2408L154.064 34.758C154.378 35.0841 154.754 35.3443 155.169 35.5235C155.585 35.7026 156.033 35.7971 156.485 35.8013C156.938 35.8056 157.387 35.7196 157.806 35.5483C158.225 35.377 158.606 35.1239 158.926 34.8037C159.246 34.4836 159.499 34.1028 159.671 33.6837C159.842 33.2646 159.928 32.8156 159.924 32.3628C159.92 31.9101 159.825 31.4627 159.646 31.0469C159.467 30.6311 159.207 30.2552 158.881 29.9411Z"
              fill="#2DA2FC"
            />
            <path
              d="M155.474 0.997216C154.836 0.362279 153.972 0.00585937 153.071 0.00585938C152.171 0.00585938 151.307 0.362279 150.669 0.997216L140.3 11.3588L136.32 7.3828C136.012 7.03402 135.636 6.75195 135.215 6.55399C134.795 6.35603 134.338 6.24637 133.873 6.23179C133.408 6.21721 132.945 6.29801 132.513 6.46921C132.081 6.6404 131.688 6.89837 131.359 7.22719C131.03 7.556 130.772 7.94871 130.601 8.38107C130.43 8.81343 130.349 9.27627 130.364 9.74107C130.378 10.2059 130.488 10.6627 130.686 11.0835C130.884 11.5043 131.166 11.88 131.515 12.1876L136.435 17.1077C136.827 16.4288 137.392 15.8651 138.071 15.4733C138.75 15.0814 139.521 14.8751 140.305 14.8751C141.089 14.8751 141.86 15.0814 142.539 15.4733C143.218 15.8651 143.783 16.4288 144.175 17.1077L155.481 5.80202C156.117 5.16431 156.474 4.30035 156.474 3.39962C156.474 2.49889 156.117 1.63493 155.481 0.997216"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_286_11574">
              <rect width="160" height="39.1592" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="text-footer"> © 2023 Vinneren. {intl.formatMessage({id:"app.components.footer.label.right-reserved"})}</p>
        <div style={{marginTop: '0px'}}>
          <Link to="/terms&conditions" style={{ color: 'white', fontSize:'14px'}}>
            <text>
              {intl.formatMessage({
                id: 'app.pages.footer.privacidad',
              })}
            </text>
          </Link>
        </div>
      </div>
      <div className="country1">
        <h3>México</h3>
        <p className="text-footer contact">
        frontdesk@vinneren.com.mx <br /> 55 9003 3945
        </p>
      </div>
      <div className="country2">
        <h3>US</h3>
        <p className="text-footer">
        frontdesk@vinneren.com.mx <br /> +1 505 317 3103
        </p>
      </div>
      <div className="socials-anvo">
        <div className="socials">
          <a href="https://www.instagram.com/vinnerenmx/">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1.98C13.9362 1.98 14.2831 1.98 15.4508 2.04769C16.1473 2.05727 16.837 2.18605 17.49 2.42846C17.9729 2.60835 18.4074 2.89803 18.7592 3.27462C19.1303 3.62778 19.4191 4.05819 19.6054 4.53538C19.8486 5.19112 19.9774 5.88375 19.9862 6.58308C20.0369 7.74231 20.0454 8.08923 20.0454 11.0254C20.0454 13.9615 20.0454 14.3169 19.9862 15.4762C19.9766 16.1727 19.8478 16.8624 19.6054 17.5154C19.4245 17.9917 19.1447 18.4242 18.7845 18.7845C18.4242 19.1447 17.9917 19.4245 17.5154 19.6054C16.8624 19.8478 16.1727 19.9766 15.4762 19.9862C14.3085 20.0369 13.9615 20.0454 11.0254 20.0454C8.08923 20.0454 7.74231 20.0454 6.58308 19.9862C5.88375 19.9774 5.19112 19.8486 4.53538 19.6054C4.05819 19.4191 3.62778 19.1303 3.27462 18.7592C2.89803 18.4074 2.60835 17.9729 2.42846 17.49C2.18605 16.837 2.05727 16.1473 2.04769 15.4508C1.99692 14.2915 1.98 13.9362 1.98 11C1.98 8.06385 1.98 7.71692 2.04769 6.55769C2.05647 5.85837 2.18526 5.16574 2.42846 4.51C2.6084 4.02954 2.89816 3.5978 3.27462 3.24923C3.62318 2.87278 4.05493 2.58302 4.53538 2.40308C5.19112 2.15988 5.88375 2.03109 6.58308 2.02231C7.74231 1.97154 8.08923 1.95462 11.0254 1.95462L11 1.98ZM11 0C8.01308 0 7.61538 0 6.46462 0.0676923C5.55372 0.0838475 4.65228 0.25555 3.79923 0.575385C3.06588 0.856687 2.39988 1.28908 1.84448 1.84448C1.28908 2.39988 0.856687 3.06588 0.575385 3.79923C0.25555 4.65228 0.0838475 5.55372 0.0676923 6.46462C0 7.61538 0 8.01308 0 11C0 13.9869 0 14.3846 0.0676923 15.5354C0.0840426 16.449 0.255723 17.3532 0.575385 18.2092C0.852432 18.9423 1.28551 19.6063 1.84462 20.1554C2.39439 20.7177 3.06193 21.1511 3.79923 21.4246C4.65279 21.7437 5.55363 21.9182 6.46462 21.9408C7.61538 22 8.01308 22 11 22C13.9869 22 14.3846 22 15.5354 21.9408C16.4491 21.918 17.3527 21.7436 18.2092 21.4246C18.9439 21.1508 19.6086 20.7173 20.1554 20.1554C20.7145 19.6063 21.1476 18.9423 21.4246 18.2092C21.7436 17.3527 21.918 16.4491 21.9408 15.5354C22 14.3846 22 13.9869 22 11C22 8.01308 22 7.61538 21.9408 6.46462C21.9182 5.55363 21.7437 4.65279 21.4246 3.79923C21.1479 3.06354 20.7149 2.39666 20.1554 1.84462C19.6063 1.28551 18.9423 0.852432 18.2092 0.575385C17.3532 0.255723 16.449 0.0840426 15.5354 0.0676923C14.3846 0 13.9869 0 11 0Z"
                fill="#0084FF"
              />
              <path
                d="M11 5.35598C9.88174 5.35598 8.78859 5.6877 7.85889 6.30916C6.92919 6.93062 6.20473 7.81389 5.77717 8.8472C5.34961 9.88052 5.23817 11.0174 5.45695 12.1141C5.67573 13.2108 6.2149 14.2179 7.00624 15.0081C7.79757 15.7982 8.80551 16.3359 9.90251 16.553C10.9995 16.7702 12.1363 16.657 13.1689 16.2279C14.2016 15.7988 15.0838 15.073 15.7039 14.1424C16.3239 13.2118 16.654 12.1181 16.6523 10.9998C16.6534 10.2576 16.5079 9.52254 16.2242 8.83674C15.9404 8.15094 15.524 7.52795 14.9988 7.00354C14.4736 6.47913 13.85 6.06362 13.1637 5.78089C12.4775 5.49815 11.7422 5.35375 11 5.35598ZM11 14.6637C10.2733 14.6637 9.56301 14.4481 8.95892 14.0442C8.35483 13.6403 7.88415 13.0663 7.60645 12.3947C7.32875 11.7232 7.25652 10.9844 7.39891 10.2718C7.54129 9.55923 7.89189 8.9049 8.40631 8.39166C8.92074 7.87842 9.57588 7.52933 10.2888 7.38859C11.0017 7.24785 11.7403 7.32179 12.4112 7.60103C13.0821 7.88028 13.6551 8.35228 14.0576 8.9573C14.4601 9.56232 14.674 10.2732 14.6723 10.9998C14.6734 11.4824 14.5792 11.9604 14.3951 12.4065C14.2109 12.8525 13.9405 13.2578 13.5992 13.599C13.258 13.9403 12.8527 14.2107 12.4067 14.3949C11.9606 14.579 11.4826 14.6733 11 14.6721"
                fill="#0084FF"
              />
              <path
                d="M18.1923 5.12762C18.1923 5.38869 18.1149 5.6439 17.9698 5.86097C17.8248 6.07804 17.6186 6.24723 17.3774 6.34714C17.1363 6.44705 16.8708 6.47319 16.6148 6.42225C16.3587 6.37132 16.1235 6.2456 15.9389 6.061C15.7543 5.87639 15.6286 5.64119 15.5777 5.38514C15.5267 5.12908 15.5529 4.86367 15.6528 4.62247C15.7527 4.38128 15.9219 4.17512 16.139 4.03008C16.356 3.88503 16.6112 3.80762 16.8723 3.80762C17.2224 3.80762 17.5581 3.94669 17.8057 4.19424C18.0532 4.44178 18.1923 4.77753 18.1923 5.12762Z"
                fill="#0084FF"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/people/Vinneren-Consulting-Ecommerce/100066646155504/">
            <svg
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.81854 21.9965V11.9792H11.198L11.7003 8.0571H7.81854V5.55887C7.81854 4.4271 8.13387 3.65221 9.75821 3.65221H11.8164V0.155429C10.815 0.048107 9.80837 -0.00371313 8.80121 0.000206759C5.8141 0.000206759 3.76321 1.82376 3.76321 5.17143V8.04976H0.405762V11.9719H3.77054V21.9965H7.81854Z"
                fill="#0084FF"
              />
            </svg>
          </a>
          <a href="https://mx.linkedin.com/company/vinnerenconsulting">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_286_11569)">
                <path
                  d="M3.45401 6.01763C4.8532 6.01763 5.98748 4.88336 5.98748 3.48416C5.98748 2.08496 4.8532 0.950684 3.45401 0.950684C2.05481 0.950684 0.920532 2.08496 0.920532 3.48416C0.920532 4.88336 2.05481 6.01763 3.45401 6.01763Z"
                  fill="#0084FF"
                />
                <path
                  d="M8.37973 7.93721V21.9929H12.7438V15.0421C12.7438 13.2079 13.0889 11.4317 15.363 11.4317C17.6058 11.4317 17.6336 13.5287 17.6336 15.1578V21.9941H22V14.2859C22 10.4996 21.1849 7.58984 16.7594 7.58984C14.6347 7.58984 13.2105 8.75584 12.628 9.85932H12.569V7.93721H8.37973ZM1.26794 7.93721H5.639V21.9929H1.26794V7.93721Z"
                  fill="#0084FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_286_11569">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div>
          <AnvoIcon width="160px" />
        </div>
      </div>
    </div>
  )
}

export default Footer
