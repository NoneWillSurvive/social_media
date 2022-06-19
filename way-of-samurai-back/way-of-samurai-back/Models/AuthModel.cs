using System;
using System.Collections.Generic;

namespace way_of_samurai_back.Models
{
    public class Auth
    {
        public AuthUser Data { get; set; }
        
        public string[] FieldsErrors { get; set; }
        
        public string[] Messages { get; set; }
        
        public int ResultCode { get; set; }
    }

}