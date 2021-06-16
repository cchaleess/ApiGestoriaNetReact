using ApiGestoria.Interfaces;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Nancy.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Services
{
    public class ConnectionSqlServices: IConnectionSqlServices
    {
        private readonly IConfiguration _configuration;
        private string ConnectionString;
        public ConnectionSqlServices(IConfiguration configuration)
        {
            _configuration = configuration;
            ConnectionString = _configuration.GetConnectionString("Conexion");
        }

        public async Task<string> GetDataFormatJsonFromSql(string query)
        {
            DataTable table = new DataTable();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            string sqlDataSource = _configuration.GetConnectionString("Conexion");
            try
            {
                using (SqlConnection connexion = new SqlConnection(sqlDataSource))
                {
                    await connexion.OpenAsync();

                    SqlDataReader myReader;
                    SqlCommand myCommand = new SqlCommand();
                    myCommand.CommandText = query;
                    myCommand.Connection = connexion;
                    myReader = await myCommand.ExecuteReaderAsync();
                    table.Load(myReader);
                    myReader.Close();               
                    Dictionary<string, object> row;
                    foreach (DataRow dr in table.Rows)
                    {
                        row = new Dictionary<string, object>();
                        foreach (DataColumn col in table.Columns)
                        {
                            row.Add(col.ColumnName, dr[col]);
                        }
                        rows.Add(row);
                    }                               
                    await connexion.CloseAsync();
           
                }
            }
            catch (Exception ex)
            {
                string exception = ex.ToString();
                return null;
            }
            return serializer.Serialize(rows);
        }

        public async Task<int> CrudDataToSql(string query)
        {
            DataTable table = new DataTable();
            int rowsAffected = 0;
            string exception = "";
            string sqlDataSource = _configuration.GetConnectionString("Conexion");
            try
            {
                using (SqlConnection connexion = new SqlConnection(sqlDataSource))
                {
                    using (SqlCommand cmd = new SqlCommand(query, connexion))
                    {
                        cmd.CommandType = CommandType.Text;
                        await connexion.OpenAsync();
                        rowsAffected = await cmd.ExecuteNonQueryAsync();
                        await connexion.CloseAsync();
                    }
                }
            }
            catch (Exception ex)
            {
                exception = ex.ToString();
                return rowsAffected;
            }
            return rowsAffected;
        }
    }
}
