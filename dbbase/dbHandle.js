var mongoose=require('mongoose');
var models=require('./models.js');
var Schema=mongoose.Schema;
/*根据已经规划好的数据库模型表定义各种数据库模型，传入必要的模型骨架Schema和模型名（类型）*/
for( var modelName in models ){
	mongoose.model( modelName , new Schema( models[ modelName ] ));
}

/*传入模型名（类型）获取到相应的模型*/
module.exports={
	getModel : function( modelName ){
		return _getModel( modelName );
	}
};

var _getModel=function( modelName ){
	return mongoose.model( modelName );
}

/* 总的来说这个数据库操控模块功能就是根据已经有了的数据库模型规划表生成各种实际的
数据库模型，并当传入一个数据库模型名给它时，给你返回相应的数据库模型，得到数据库模型你可以去操控数据库*/