using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Interfaces
{
    public interface IConnectionSqlServices
    {
        public Task<string>  GetDataFormatJsonFromSql(string query);
        public Task<int> CrudDataToSql(string query);

    }
}
