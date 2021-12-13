# DateTime
<a id="markdown-datetime" name="datetime"></a>

---

<!-- TOC -->

- [DateTime](#datetime)
  - [Power Apps](#power-apps)
    - [Text 関数](#text-関数)
      - [Predefined date/time formats](#predefined-datetime-formats)
      - [Date and time placeholders](#date-and-time-placeholders)
  - [power Automate](#power-automate)
    - [formatDateTime 関数](#formatdatetime-関数)
      - [標準の日時書式指定文字列](#標準の日時書式指定文字列)
      - [カスタム日時形式文字列](#カスタム日時形式文字列)

<!-- /TOC -->

---

## Power Apps
<a id="markdown-power-apps" name="power-apps"></a>

### [Text 関数](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/maker/canvas-apps/functions/function-text.md)
<a id="markdown-text-%E9%96%A2%E6%95%B0" name="text-%E9%96%A2%E6%95%B0"></a>

#### Predefined date/time formats
<a id="markdown-predefined-date%2Ftime-formats" name="predefined-date%2Ftime-formats"></a>

| DateTimeFormat enum | Description   | Examples (using  `ja-JP`)  |
| ------------------- | ------------- | -------------------------- |
| `LongDate `         |               | ``                         |
| `LongDateTime `     |               | ``                         |
| `LongDateTime24 `   |               | ``                         |
| `LongTime `         |               | ``                         |
| `LongTime24 `       |               | ``                         |
| `ShortDate `        |               | ``                         |
| `ShortDateTime `    |               | ``                         |
| `ShortDateTime24 `  |               | ``                         |
| `ShortTime `        |               | ``                         |
| `ShortTime24 `      |               | ``                         |
| `UTC `              | ISO 8601 形式 | `2020-04-08T03:26:59.180Z` |

#### Date and time placeholders
<a id="markdown-date-and-time-placeholders" name="date-and-time-placeholders"></a>

| Placeholder    | Description                                          | Examples (using  `ja-JP`) |
| -------------- | ---------------------------------------------------- | ------------------------- |
| `yy`           | 2桁年                                                | ``                        |
| `yyyy`         | 4桁年                                                | ``                        |
| `m`            | 月（ `h` , `hh` の直後や `ss` の直前でない）         | ``                        |
| `mm`           | ゼロ埋め月（ `h` , `hh` の直後や `ss` の直前でない） | ``                        |
| `mmm`          | 月の略称                                             | ``                        |
| `mmmm`         | 月名                                                 | ``                        |
| `d`            | 日                                                   | ``                        |
| `dd`           | ゼロ埋め日                                           | ``                        |
| `ddd`          | 曜日の略称                                           | ``                        |
| `dddd`         | 曜日名                                               | ``                        |
| `h`            | 時                                                   | ``                        |
| `hh`           | ゼロ埋め時（ `AM/PM`が含まれる場合は12時間制）       | ``                        |
| `m`            | 分（ `h` , `hh` の直後または `ss` の直前）           | ``                        |
| `mm`           | ゼロ埋め分（ `h` , `hh` の直後または `ss` の直前）   | ``                        |
| `s`            | 秒                                                   | ``                        |
| `ss`           | ゼロ埋め秒                                           | ``                        |
| `f`            | 秒の端数                                             | ``                        |
| `AM/PM`, `a/p` | 12時間制                                             | ``                        |

## power Automate
<a id="markdown-power-automate" name="power-automate"></a>

### [formatDateTime 関数](https://docs.microsoft.com/ja-jp/azure/logic-apps/workflow-definition-language-functions-reference#formatDateTime)
<a id="markdown-formatdatetime-%E9%96%A2%E6%95%B0" name="formatdatetime-%E9%96%A2%E6%95%B0"></a>

#### 標準の日時書式指定文字列
<a id="markdown-%E6%A8%99%E6%BA%96%E3%81%AE%E6%97%A5%E6%99%82%E6%9B%B8%E5%BC%8F%E6%8C%87%E5%AE%9A%E6%96%87%E5%AD%97%E5%88%97" name="%E6%A8%99%E6%BA%96%E3%81%AE%E6%97%A5%E6%99%82%E6%9B%B8%E5%BC%8F%E6%8C%87%E5%AE%9A%E6%96%87%E5%AD%97%E5%88%97"></a>

| Placeholder     | Description                                   | Examples (using  `ja-JP`) |
| --------------- | --------------------------------------------- | ------------------------- |
| `d`             | 短い形式の日付パターン                        | ``                        |
| `D`             | 長い形式の日付パターン                        | ``                        |
| `f`             | 完全な日付と時刻のパターン (短い形式の時刻)   | ``                        |
| `F`             | 完全な日付と時刻のパターン (長い形式の時刻)   | ``                        |
| `g`             | 一般の日付と時刻のパターン (短い形式の時刻)   | ``                        |
| `G`             | 一般の日付と時刻のパターン (長い形式の時刻)   | ``                        |
| `M`、`m`        | 月日パターン                                  | ``                        |
| `O`、`o`        | ラウンドトリップする日付と時刻のパターン      | ``                        |
| `R`、`r`        | RFC1123 パターン                              | ``                        |
| `s`             | 並べ替え可能な日付と時刻のパターン            | ``                        |
| `t`             | 短い形式の時刻パターン                        | ``                        |
| `T`             | 長い形式の時刻パターン                        | ``                        |
| `u`             | 並べ替え可能な日付と時刻のパターン (世界時刻) | ``                        |
| `U`             | 完全な日付と時刻のパターン (世界時刻)         | ``                        |
| `Y`、`y`        | 年月パターン                                  | ``                        |
| その他の 1 文字 | 未定義の指定子                                | ``                        |

#### カスタム日時形式文字列
<a id="markdown-%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E6%97%A5%E6%99%82%E5%BD%A2%E5%BC%8F%E6%96%87%E5%AD%97%E5%88%97" name="%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E6%97%A5%E6%99%82%E5%BD%A2%E5%BC%8F%E6%96%87%E5%AD%97%E5%88%97"></a>

| Placeholder  | Description                                                    | Examples (using  `ja-JP`) |
| ------------ | -------------------------------------------------------------- | ------------------------- |
| `g`、`gg`    | 時期または時代 (年号)                                          | ``                        |
| `y`          | 年 (0 ～ 99)                                                   | ``                        |
| `yy`         | 年 (00 ～ 99)                                                  | ``                        |
| `yyy`        | 年 (3 桁以上)                                                  | ``                        |
| `yyyy`       | 年 (4 桁の数値)                                                | ``                        |
| `yyyyy`      | 年 (5 桁の数値)                                                | ``                        |
| `M`          | 月 (1 ～ 12)                                                   | ``                        |
| `MM`         | 月 (01 ～ 12)                                                  | ``                        |
| `MMM`        | 月の省略名                                                     | ``                        |
| `MMMM`       | 月の完全名                                                     | ``                        |
| `d`          | 月の日にち (1 ～ 31)                                           | ``                        |
| `dd`         | 月の日にち (01 ～ 31)                                          | ``                        |
| `ddd`        | 曜日の省略名                                                   | ``                        |
| `dddd`       | 曜日の完全名                                                   | ``                        |
| `h`          | 12 時間形式の時間 (1 ～ 12)                                    | ``                        |
| `hh`         | 12 時間形式の時間 (01 ～ 12)                                   | ``                        |
| `H`          | 24 時間形式の時間 (0 ～ 23)                                    | ``                        |
| `HH`         | 24 時間形式の時間 (00 ～ 23)                                   | ``                        |
| `K`          | タイム ゾーン情報                                              | ``                        |
| `m`          | 分 (0 ～ 59)                                                   | ``                        |
| `mm`         | 分 (00 ～ 59)                                                  | ``                        |
| `s`          | 秒 (0 ～ 59)                                                   | ``                        |
| `ss`         | 秒 (00 ～ 59)                                                  | ``                        |
| `f`          | 日時値の秒部分の 1/10                                          | ``                        |
| `ff`         | 日時値の秒部分の 1/100                                         | ``                        |
| `fff`        | 日時値の秒部分の 1/1000                                        | ``                        |
| `ffff`       | 日時値の秒部分の 1/10000                                       | ``                        |
| `fffff`      | 日時値の秒部分の 1/100000                                      | ``                        |
| `ffffff`     | 日時値の秒部分の 1/1000000                                     | ``                        |
| `fffffff`    | 日時値の秒部分の 1/10000000                                    | ``                        |
| `F`          | 日時値の秒部分の 1/10 (0 以外の場合)                           | ``                        |
| `FF`         | 日時値の秒部分の 1/100 (0 以外の場合)                          | ``                        |
| `FFF`        | 日時値の秒部分の 1/1000 (0 以外の場合)                         | ``                        |
| `FFFF`       | 日時値の秒部分の 1/10000 (0 以外の場合)                        | ``                        |
| `FFFFF`      | 日時値の秒部分の 1/100000 (0 以外の場合)                       | ``                        |
| `FFFFFF`     | 日時値の秒部分の 1/1000000 (0 以外の場合)                      | ``                        |
| `FFFFFFF`    | 日時値の秒部分の 1/10000000 (0 以外の場合)                     | ``                        |
| `t`          | AM/PM 指定子の最初の文字                                       | ``                        |
| `tt`         | AM/PM 指定子                                                   | ``                        |
| `z`          | UTC を基準とする時間単位のオフセット (先行ゼロなし)            | ``                        |
| `zz`         | UTC を基準とする時間単位のオフセット (先行ゼロ付きの 1 桁の値) | ``                        |
| `zzz`        | UTC を基準とする時間および分単位のオフセット                   | ``                        |
| `:`          | 時刻の区切り記号                                               | ``                        |
| `/`          | 日付の区切り記号                                               | ``                        |
| "文字列"     | リテラル文字列の区切り記号                                     | ``                        |
| '文字列'     | 詳細情報:文字リテラル                                          | ``                        |
| %            | 後続の文字をカスタム書式指定子として定義します                 | ``                        |
| \            | エスケープ文字                                                 | ``                        |
| その他の文字 | 文字が結果の文字列にそのままコピーされます                     | ``                        |
