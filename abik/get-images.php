<?php
// Путь к папке с изображениями
$imageFolder = 'gallery/';

// Получаем список всех файлов в папке
$images = scandir($imageFolder);

// Убираем . и .. из списка
$images = array_diff($images, array('.', '..'));

// Отправляем только изображения (например, jpg, png)
$validImages = [];
foreach ($images as $image) {
    if (in_array(pathinfo($image, PATHINFO_EXTENSION), ['jpg', 'jpeg', 'png', 'gif'])) {
        $validImages[] = $image;
    }
}

// Возвращаем JSON с именами изображений
echo json_encode($validImages);
?>
