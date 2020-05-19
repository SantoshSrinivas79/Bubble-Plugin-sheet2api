function(properties, context) {
    var body = {};
    console.log(properties);
    body[properties.column_name] = properties.column_value;
    context.jQuery.ajax({
      type: "POST",
      url: `${properties.sheet2api_api_url}/${properties.sheet_name}`,
      data: JSON.stringify(body),  
      contentType: 'application/json',
      dataType: 'json'
    });
}