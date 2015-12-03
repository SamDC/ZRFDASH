'use strict';

/**
 * @ngdoc function
 * @name buildDashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buildDashApp
 */
angular.module('buildDashApp')
  .controller('MainCtrl', ['$scope', '$mdDialog', '$mdMedia', function ($scope, $mdDialog, $mdMedia) {
      
      $scope.showAdvanced = function(ev) {
          $mdDialog.show({
              controller: DialogController,
              templateUrl: 'templates/dashboard.menu.template.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: $mdMedia('sm') && $scope.customFullscreen
          }).then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
          $scope.$watch(function() {
              return $mdMedia('sm');
          }, function(sm) {
              $scope.customFullscreen = (sm === true);
          });
      };
    
    $scope.dashboardKpiData =      
    { kpis: [{ title: 'Net Sales',
               value: 123456,
               icon: 'local_atm'},
                { title: 'New Customers',
               value: 150,
               icon: 'person_add'},
                { title: 'Average Basket Value',
               value: 21.20,
               icon: 'shopping_basket'},
                { title: 'Average Trolley Value',
               value: 92.20,
               icon: 'shopping_cart'},
                { title: 'Theft & Loss',
               value: 2345,
               icon: 'directions_run'}
            ]
    };
      
    $scope.dashboardPanelData =
    { panels: [{ panel_id: 1, 
                  title: 'TY vs LY Net Sales',
                  type: 'line',
                  data: [{
                        x: 0,
                        val_0: 0,
                        val_1: 0
                      },
                      {
                        x: 1,
                        val_0: 0.993,
                        val_1: 3.894
                      },
                      {
                        x: 2,
                        val_0: 1.947,
                        val_1: 7.174
                      },
                      {
                        x: 3,
                        val_0: 2.823,
                        val_1: 9.32
                      },
                      {
                        x: 4,
                        val_0: 3.587,
                        val_1: 9.996
                      },
                      {
                        x: 5,
                        val_0: 4.207,
                        val_1: 9.093
                      },
                      {
                        x: 6,
                        val_0: 4.66,
                        val_1: 6.755
                      },
                      {
                        x: 7,
                        val_0: 4.927,
                        val_1: 3.35
                      },
                      {
                        x: 8,
                        val_0: 4.998,
                        val_1: 0.584
                      },
                      {
                        x: 9,
                        val_0: 4.869,
                        val_1: 4.425
                      },
                      {
                        x: 10,
                        val_0: 4.546,
                        val_1: 7.568
                      },
                      {
                        x: 11,
                        val_0: 4.042,
                        val_1: 9.516
                      }],
                  chartOptions: {
                        series: [{
                            y: 'val_0',
                            type: 'line',
                            color: '#0D47A1 ',
                            thickness: '2px',
                            dotSize: 0
                        },{
                            y: 'val_1',
                            type: 'line',
                            color: '#2196F3 ',
                            thickness: '2px',
                            dotSize: 0
                        }],
                        lineMode: 'linear',
                        axes: {x:{ticks: 12}, y: {type: 'linear', ticks: 2}}
                    }    
                 },
                { panel_id: 2,
                 title: 'You doughnut',
                 type: 'doughnut',
                 data: [
                  {label: 'One', value: 11, color: '#1f77b4'},
                  {label: 'Two', value: 22, color: '#ff7f0e'},
                  {label: 'Three', value: 33, color: '#2ca02c'}
],
                 chartOptions:{thickness: 10}
                },
                { panel_id: 3, 
                  title: 'Bar',
                  type: 'column',
                  data: [{
                        x: 0,
                        val_0: 0,
                        val_1: 0
                      },
                      {
                        x: 1,
                        val_0: 0.993,
                        val_1: 3.894
                      },
                      {
                        x: 2,
                        val_0: 1.947,
                        val_1: 7.174
                      },
                      {
                        x: 3,
                        val_0: 2.823,
                        val_1: 9.32
                      },
                      {
                        x: 4,
                        val_0: 3.587,
                        val_1: 9.996
                      },
                      {
                        x: 5,
                        val_0: 4.207,
                        val_1: 9.093
                      },
                      {
                        x: 6,
                        val_0: 4.66,
                        val_1: 6.755
                      },
                      {
                        x: 7,
                        val_0: 4.927,
                        val_1: 3.35
                      },
                      {
                        x: 8,
                        val_0: 4.998,
                        val_1: 0.584
                      },
                      {
                        x: 9,
                        val_0: 4.869,
                        val_1: 4.425
                      },
                      {
                        x: 10,
                        val_0: 4.546,
                        val_1: 7.568
                      },
                      {
                        x: 11,
                        val_0: 4.042,
                        val_1: 9.516
                      }],
                  chartOptions: {
                        series: [{
                            y: 'val_0',
                            type: 'column',
                            color: '#0D47A1 ',
                            thickness: '2px',
                            dotSize: 0
                        },{
                            y: 'val_1',
                            type: 'column',
                            color: '#2196F3 ',
                            thickness: '2px',
                            dotSize: 0
                        }],
                        lineMode: 'linear',
                        axes: {x:{ticks: 12}, y: {type: 'linear', ticks: 2}}
                    }    
                 },
                 { panel_id: 4,
                 title: 'Reports',
                 type: 'reports',
                 data: [
                  {title:'P&L 15/16', link: 'abc'},
                  {title:'Theft & Loss', link: 'abc'},
                  {title:'Till Takings Milton Keynes', link: 'abc'},
                  {title:'Food Waste', link: 'abc'},
                  {title:'Homewear Sales', link: 'abc'}
                  ]
            }]};    
}]);

function DialogController($scope, $mdDialog, $http) {
    
    $scope.dashMenu = {component: 'chart',
                       title: '',
                       type: 'column',
                       xAxis: '',
                       yAxis: ''};
    
    $scope.isActiveColumn = true;
    
    $http.get('assets/material-icons.json')
       .then(function(res){
          $scope.icons = res.data.icons;
        console.log($scope.icons);
    });
    
    $scope.selectedIcon = function(selection) {
        $scope.iconSelected = selection;
    };
    
    $scope.chartSelect = function(selection) {
        $scope.isActiveColumn = selection === 0 ? true : false;
        $scope.isActiveLine = selection === 1 ? true : false;
        $scope.isActiveDoughnut = selection === 2 ? true : false;
        $scope.isActiveDual = selection === 3 ? true : false;
        
        $scope.dashMenu.type = selection === 0 ? 'column' : selection === 1 ? 'line' : selection === 2 ? 'doughnut' : 'dual';
    };
    
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}