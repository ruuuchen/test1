# 1.9 按鈕 Buttons (請勿參閱，調整中)

    - 為了跨裝置通用性與對照閱讀，初步重擬WEB規範文件架構，拆分小單位。
    - 文件架構框架參考：vuetify、Vue Eelement UI、Bootstrap
    - 設計規範內容參考：Predix、ant.design、IBM、atlassian、microsoft

[1. 基礎按鈕 Basic Button丨](https://paper.dropbox.com/doc/1.9-Buttons-7li4JVXGYZbYTlSqZDHeG#:uid=151960981527389307537922&h2=1.-%E5%9F%BA%E7%A4%8E%E6%8C%89%E9%88%95-Default-Button%E4%B8%A8)
[2. 文字按鈕 Text Button丨](https://paper.dropbox.com/doc/1.9-Buttons-7li4JVXGYZbYTlSqZDHeG#:uid=115737214868733536244936&h2=2.-%E6%96%87%E5%AD%97%E6%8C%89%E9%88%95-Link-Button%E4%B8%A8)
[3. 圖標按鈕 Icon Button丨](https://paper.dropbox.com/doc/1.9-Buttons-7li4JVXGYZbYTlSqZDHeG#:uid=598082955446842110785249&h2=3.-%E5%9C%96%E6%A8%99%E6%8C%89%E9%88%95-Icon-Button%E4%B8%A8)
[4. 超連結按鈕 Link Button丨](https://paper.dropbox.com/doc/1.9-Buttons--AnewiiE2fPseMH0XQyA0JLFPAg-7li4JVXGYZbYTlSqZDHeG#:uid=800089543671004243661200&h2=4.-%E9%80%A3%E7%B5%90%E6%8C%89%E9%88%95-Link-Button%E4%B8%A8)
[5. 特殊按鈕 Featured Button丨](https://paper.dropbox.com/doc/1.9-Buttons-7li4JVXGYZbYTlSqZDHeG#:uid=596755304703149552274331&h2=4.--%E7%89%B9%E6%AE%8A%E6%8C%89%E9%88%95-Featured-Button%E4%B8%A8)
[6. 客製按鈕 Customized Button丨](https://paper.dropbox.com/doc/1.9-Buttons-7li4JVXGYZbYTlSqZDHeG#:uid=312439566878020572438959&h2=5.-%E5%AE%A2%E8%A3%BD%E6%8C%89%E9%88%95-Customized-Button%E4%B8%A8)
[7. 按鈕群組 Button Group丨](https://paper.dropbox.com/doc/1.9-Buttons-7li4JVXGYZbYTlSqZDHeG#:uid=668492319572321587206193&h2=6.-%E6%8C%89%E9%88%95%E7%BE%A4%E7%B5%84-Button-Group%E4%B8%A8)


# 1. 基礎按鈕 Basic Button丨
## 使用描述 Description
- 518站台網頁介面使用。
- 常態一般EDM信件使用。


## 尺寸 Size


- **預設 (Default Button)**

依固定的按鈕內距呈現寬度

![](https://paper-attachments.dropbox.com/s_C00CC81CBA5B81A47828D3792B691D132C3B95315BC9F9633F8BAC1707A2B4B7_1572232222283_Artboard.jpg)

- **滿版 ( Block Button )**

依照父層元素來呈現滿版寬度

![](https://paper-attachments.dropbox.com/s_C00CC81CBA5B81A47828D3792B691D132C3B95315BC9F9633F8BAC1707A2B4B7_1572232245313_Artboard+Copy.jpg)

## 類別與狀態 Types and States
|           |                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 類別        | **Primary** ******Button**                                                                                                                                                                                                          | **Secondary** ******Button**                                                                                                                                                                                                            | **Tertiary** **Button**                                                                                                                                                                                                          | **Outlined Button**                                                                                                                                                                                                                                  | **Ghost Button**                                                                                                                                                                                                                                                                            |
| 描述        | 頁面中權重最重要的按鈕                                                                                                                                                                                                                         | 頁面中重要性居次的按鈕                                                                                                                                                                                                                             | 頁面中輕度提示的按鈕                                                                                                                                                                                                                       | 非首要的按鈕，可以用線框按鈕方式呈現。                                                                                                                                                                                                                                  | 語意消極的按鈕（也就是較不希望使用者去按的按鈕）會使用灰色系幽靈按鈕呈現。                                                                                                                                                                                                                                                       |
| default   | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572090935764_Artboard.png)<br><br><br>background: #FF6446;**(Orange-600)**<br>color: #FFFFFF;**(White-100)**          | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572091023042_Artboard.png)<br><br><br>background: #FFDE5D;**(Yellow-600)**<br>color: #0B3B6C;**(Dark-Blue-700)**          | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572091085189_Artboard.png)<br><br><br>background: #FF9F36;**(OrangeYellow-600)**<br>color: #FFFFFF;**(White-100)** | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572090644364_Artboard.png)<br><br><br>border: solid 1px #FF6446;**(Orange-600)**<br>color: #FF6446;**(Orange-600)**                    | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572090791066_Artboard.png)<br><br><br>border: solid 1px #80000000 100%;**(Black-50)**<br>color: #b3000000 70%; **(Black-70)**                                                 |
| hover     | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572090945553_Artboard.png)<br><br><br>background: #FF7D60; **(****melon****)**<br>color: #FFFFFF;**(White-100)**      | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572091030267_Artboard.png)<br><br><br>background: #FFEA9A; **(****Yellow-400****)**<br>color: #0B3B6C;**(Dark-Blue-700)** | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572091092613_Artboard.png)<br><br><br>background: #FFBA70;**(OrangeYellow-400)**<br>color: #FFFFFF;**(White-100)** | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572090654639_Artboard.png)<br><br><br>border: none;<br>background: #FF6446;**(Orange-600)**<br>color: #FFFFFF;**(White-100)**          | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572090821600_Artboard+Copy.png)<br><br><br>border: solid 1px #80000000 100%;**(Black-50)**<br>background: #FAFAFA; (**SolidGray-02**)<br>color: #b3000000 70%; **(Black-70)** |
| disable   | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572090954019_Artboard.png)<br><br><br>background: #FFBAA9; **(****Orange-200****)**<br>color: #FFFFFF;**(White-100)** | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572091038127_Artboard.png)<br><br><br>background: #FFF2C0; **(****Yellow-200****)**<br>color: #0B3B6C;**(Dark-Blue-700)** | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572091100221_Artboard.png)<br><br><br>background: #FFD4A3;**(OrangeYellow-200)**<br>color: #FFFFFF;**(White-100)** | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572090664537_Artboard.png)<br><br><br>border: none;<br>background: #FFBAA9; **(****Orange-200****)**<br>color: #FFFFFF;**(White-100)** | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572090826986_Artboard+Copy+2.png)<br><br><br>border: solid 1px #26000000 15%;**(Black-15)**<br>color: #4c000000 30%; **(Black-30)**                                           |
| animation | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                                                            | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                                                                | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                                                         | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                                                                             | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                                                                                                                    |



## 程式碼 Code
    /* class 名稱 僅為列舉用 */
    .btn-basic {
      border-radius: 4px;
      padding: 10px 15px; /* 無設定行高時，上下padding:10px , 有設定行高時，上下 padding: 8px */
      font-size: 15px;
      line-height: 22px;
      background-color: #ff6446; (Orange-600) /* 依類別狀態調整 */
      color: #fff; /* 依類別狀態調整 */
    }



# 2. 文字按鈕 Text Button丨
## 使用描述 Description

純圖標文字按鈕，没有邊框和背景色。

## 尺寸 Size
![](https://paper-attachments.dropbox.com/s_C00CC81CBA5B81A47828D3792B691D132C3B95315BC9F9633F8BAC1707A2B4B7_1572232279912_Artboard+Copy+2.jpg)

## 類別與狀態 Types and States
| 類別        | **Text** **Button**                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 描述        | 純圖標文字按鈕，没有邊框和背景色。                                                                                                                                                                        |
| default   | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572099572198_Artboard.png)<br><br><br>color: #333333;**(SolidGray-90)**    |
| disable   | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572099538805_Artboard.png)<br><br><br>color: #4c000000 30%; **(Black-30)** |
| animation | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                 |

## 程式碼 Code
    // 


# 3. 圖標按鈕 Icon Button丨
## 使用描述 Description

带圖標的按鈕可增强辨識度。


## 尺寸 Size

依固定的按鈕內距呈現寬度

![](https://paper-attachments.dropbox.com/s_C00CC81CBA5B81A47828D3792B691D132C3B95315BC9F9633F8BAC1707A2B4B7_1572232327814_Artboard+Copy+3.jpg)



## 類別與狀態 Types and States
| 類別        | **Primary Button**                                                                                                                                                                                                                    | **Outlined Button**                                                                                                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 描述        | 带圖標的按鈕可增强辨識度（有文字）或節省空間（無文字）。                                                                                                                                                                                                          | 非首要的按鈕，可以用線框按鈕方式呈現。                                                                                                                                                                                                                                    |
| default   | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572101523994_Artboard.png)<br><br><br>background: #FF6446;**(Orange-600)**<br>color: #FFFFFF;**(White-100)**            | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572101248064_Artboard+3.png)<br><br><br>border: solid 1px #FF6446;**(Orange-600)**<br>color: #FF6446;**(Orange-600)**                    |
| hover     | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572101528346_Artboard+3.png)<br><br><br>background: #FF7D60; **(****melon****)**<br>color: #FFFFFF;**(White-100)**      | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572101261416_Artboard.png)<br><br><br>border: none;<br>background: #FF6446;**(Orange-600)**<br>color: #FFFFFF;**(White-100)**            |
| disable   | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572101531107_Artboard+2.png)<br><br><br>background: #FFBAA9; **(****Orange-200****)**<br>color: #FFFFFF;**(White-100)** | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572101257721_Artboard+2.png)<br><br><br>border: none;<br>background: #FFBAA9; **(****Orange-200****)**<br>color: #FFFFFF;**(White-100)** |
| animation | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                                                              | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                                                                               |



## 程式碼 Code
    // 


# 4. 超連結按鈕 Link Button丨
## 使用描述 Description

純超連結文字按鈕。


## 尺寸 Size

無特別規範，依網頁使用的文字規範之字級為準。


## 類別與狀態 Types and States
| 類別        | **Link** **Button**                      |
| --------- | ---------------------------------------- |
| 描述        | 純超連結文字按鈕。                                |
| default   | color: #1481D8;(**Blue-600)**            |
| hover     | color: #FF6446;(**Orange-600**)          |
| disable   | color: #4c000000 30%; **(Black-30)**     |
| animation | transition: all .2s ease-in; /* 依需求調整 */ |

顏色使用詳見：[+1.2 網頁用色票 Colors: 3-文字色彩-|-Text](https://paper.dropbox.com/doc/1.2-Colors-3-Text-DuNQWGodl18iA8xMUTnEr#:uid=590592884861341332295215&amp;h2=3-%E6%96%87%E5%AD%97%E8%89%B2%E5%BD%A9-%7C-Text) 


## 程式碼 Code
    // 



# 5.  特殊按鈕 Featured Button丨
## 使用描述 Description
- 廣告行銷用。
- 活動EDM信件用。


## 尺寸 Size

依固定的按鈕內距呈現寬度

![](https://paper-attachments.dropbox.com/s_C00CC81CBA5B81A47828D3792B691D132C3B95315BC9F9633F8BAC1707A2B4B7_1572232350138_Artboard+Copy+4.jpg)



## 類別與狀態 Types and States
| 類別        | **Primary** ******Button**                                                                                                                                                                                                          | **Outlined Button**                                                                                                                                                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 描述        | 頁面中權重最重要的按鈕                                                                                                                                                                                                                         | 非首要的按鈕，可以用線框按鈕方式呈現。                                                                                                                                                                                                                                  |
| default   | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572095159552_Artboard.png)<br><br><br>background: #FF6446;**(Orange-600)**<br>color: #FFFFFF;**(White-100)**          | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572095671570_Artboard.png)<br><br><br>border: solid 1px #FF6446;**(Orange-600)**<br>color: #FF6446;**(Orange-600)**                    |
| hover     | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572095168299_Artboard.png)<br><br><br>background: #FF7D60; **(****melon****)**<br>color: #FFFFFF;**(White-100)**      | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572095680136_Artboard.png)<br><br><br>border: none;<br>background: #FF6446;**(Orange-600)**<br>color: #FFFFFF;**(White-100)**          |
| disable   | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572095176999_Artboard.png)<br><br><br>background: #FFBAA9; **(****Orange-200****)**<br>color: #FFFFFF;**(White-100)** | ![](https://paper-attachments.dropbox.com/s_B75113A33F68D49C8204B4CC60BF831DD2D707B583C544DB381D773F844EFFFB_1572095687414_Artboard.png)<br><br><br>border: none;<br>background: #FFBAA9; **(****Orange-200****)**<br>color: #FFFFFF;**(White-100)** |
| animation | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                                                            | transition: all .2s ease-in; /* 依需求調整 */                                                                                                                                                                                                             |



## 程式碼 Code


    /* class 名稱 僅為列舉用 */
    .btn-primary{
        border-radius: 50px;
        padding: 8px 30px;
        font-size: 15px;
        line-height: 22px;
        background-color: #ff6446; (Orange-600) /* 依類別狀態調整 */
        color: #fff; /* 依類別狀態調整 */
    }
    
    /* class 名稱 僅為列舉用 */
    .btn-outline{
        padding: 8px 30px;
        border-radius: 50px;
        font-size: 15px;
        line-height: 22px;
        border: 1px solid #ff6446; (Orange-600) /* 依類別狀態調整 */
        background-color: #fff; /* 依類別狀態調整 */
        color: #ff6446; /* 依類別狀態調整 */
    }


# 6. 客製按鈕 Customized Button丨
## 使用描述 Description

若是促銷性質的需求，通常會希望樣式能跟一般按鈕樣式做出區別，
例如，在右方加上小手，或加上一點立體感。


## 示範 Example


- **2019 轉職潮 (企業）**
![](https://paper-attachments.dropbox.com/s_69BF7D5DA15B84D1BE5FAC5FE8F9FD1F41D64C3702B0CDD00ED05D2E04D08D83_1552645066329_Kapture+2019-03-15+at+18.17.02.gif)

- **2019 轉職潮 (求職）**
![](https://paper-attachments.dropbox.com/s_69BF7D5DA15B84D1BE5FAC5FE8F9FD1F41D64C3702B0CDD00ED05D2E04D08D83_1558059325312_candidate_campaign_btn.gif)



# 7. 按鈕群組 Button Group丨
## 使用描述 Description

以按鈕组的方式出现，常用於多項類似操作。
建議單一頁面操作不要超過兩個按鈕，可能會讓用戶感到困惑。


## 尺寸 Size
![](https://paper-attachments.dropbox.com/s_C00CC81CBA5B81A47828D3792B691D132C3B95315BC9F9633F8BAC1707A2B4B7_1572232622009_Artboard+Copy+7.jpg)

![](https://paper-attachments.dropbox.com/s_C00CC81CBA5B81A47828D3792B691D132C3B95315BC9F9633F8BAC1707A2B4B7_1572232633350_Artboard+Copy+8.jpg)

![](https://paper-attachments.dropbox.com/s_C00CC81CBA5B81A47828D3792B691D132C3B95315BC9F9633F8BAC1707A2B4B7_1572232645115_Artboard+Copy+5.jpg)

## 類別與狀態 Types and States
| 類別 | **基礎按鈕群組**<br>**Grouped** **B****uttons**                | **正反按鈕群組**<br>**Set of Buttons**                                                                        | **特殊按鈕群組**<br>**Set of** ******Featured Buttons**   |
| -- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 描述 | 有些介面操作需要兩個按鈕，權重最重的按鈕用 primary 樣式表現，次要按鈕則採 ghost button 。 | 針對單一事件此按鈕群組只能選擇單一流程觸發。（當一個行為有一個以上的選項需要使用者做決定，就需要一組按鈕，左邊通常是帶有否定意義的按鈕，如「取消」，右邊是正面表述的按鈕(確認）。兩個按鈕之間需要空間隔開。） | 廣告、活動EDM信件用。                                        |
| 樣式 | **Primary Button**<br>**+ Outlined Button**              | **Primary Button**<br>**+ Ghost Button**                                                                | **Primary** ******Button**<br>+ **Outlined Button** |



