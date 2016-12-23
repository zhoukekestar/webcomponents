# update-file
This component is based on [modules/upload](https://github.com/zhoukekestar/modules/tree/master/src/upload)

# Quick Start
```html
<upload-file>上传图片</upload-file>
```

# Attributes

| Name | Detail |
| --- | --- |
| data-height | 指定图片高度，如：`data-height='100'`，指定`data-height`或`data-width`后<br>`data-max-height`、`data-min-width`等指定范围的参数将失效 |
| data-width | 指定图片宽度 |
| data-max-height | 指定最大图片高度，如：`data-max-height='100'` |
| data-min-height | 指定最小图片高度 |
| data-max-width | 指定最大图片宽度 |
| data-min-width | 指定最小图片宽度 |
| data-max-size | 指定最大文件大小（支持K和M），如：`data-max-size='1M'`、`data-max-size='100K'` |
| data-min-size | 指定最小文件大小 |
| data-accept | 指定文件类型，如：`data-accept='image/gif,image/jpeg'` |
| data-multiple | 指定是否支持多图上传 |


# Methods

| Method | Detail |
| --- | --- |
| onended(response) | 文件上传成功回调方法 |
| onerror(xhr) | 文件上传出错回调方法 |
| onFileSizeError(name, size, minSize, maxSize) | 文件大小不符合时将调用 |
| onImageSizeError(name, width, height) | 图片尺寸不符合时将调用 |

# Events
* `upload-file-ended` 文件上传成功后的事件，`e.target._XMLHttpRequest`获取ajax对象
