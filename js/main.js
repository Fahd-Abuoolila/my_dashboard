$(document).ready(function () {
    $('.item-header').click(function () {
        // إظهار أو إخفاء القائمة الفرعية عند النقر
        const otherList = $(this).siblings('.other-list');
        otherList.slideToggle(400, function () {
            // التحقق إذا كانت القائمة الفرعية مخفية
            if (!otherList.is(':visible')) {
                $(this).parent().removeClass('active');
            }
        });

        // إغلاق القوائم الفرعية الأخرى
        $(this).parent().siblings().find('.other-list').slideUp(400, function () {
            $(this).parent().removeClass('active'); // إزالة الـ class "active" عند الإخفاء
        });

        // إضافة class "active" إلى العنصر الحالي
        $(this).parent().addClass('active');
    });
});
