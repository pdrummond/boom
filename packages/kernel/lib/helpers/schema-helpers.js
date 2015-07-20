Boom.SchemaHelpers = {
	createdAt: {
        type: Date,
        autoValue: function() {
          if (this.isInsert) {
            return new Date;
          } else if (this.isUpsert) {
            return {$setOnInsert: new Date};
          } else {
            this.unset();
          }
        },
        optional:true,
        autoform: {omit:true}
      },  

      updatedAt: {
        type: Date,
        autoValue: function() {
            return new Date();
        },        
        optional: true,
        autoform: {omit:true}
      },
}