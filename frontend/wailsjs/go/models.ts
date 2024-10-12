export namespace main {
	
	export class Return {
	    Success: boolean;
	    Message: string;
	
	    static createFrom(source: any = {}) {
	        return new Return(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Success = source["Success"];
	        this.Message = source["Message"];
	    }
	}

}

