JSC.Chart('chartDiv', {
    type: 'pie',
        debug: true,
        legend_position: 'inside left bottom',
        defaultSeries: { type: 'pie', pointSelection: true },
        defaultPoint_label: {
          text: '<b>%name</b>',
          placement: 'auto',
          autoHide: false
        },
        toolbar_items: {
          Mode: {
            margin: 10,
            type: 'select',
            events_change: setMode,
            items: 'enum_placement'
          },
          'Auto Hide': { type: 'checkbox', events_change: setAutoHide }
        },
        title_label_text: 'time distribution',
        yAxis: { label_text: 'min(s)', formatString: 'n' },
        series: [
          {
            name: 'Workout',
            points: [
              { name: 'Warm up', y: 5 },
              { name: 'Training', y: 30 },
              { name: 'Cardio', y: 20 },
              { name: 'Cool down', y: 5 }
            ]
          }
        ]
      });
      function setMode(val) {
        chart.options({ defaultPoint: { label: { placement: val } } });
      }

      function setAutoHide(val) {
        chart.options({ defaultPoint: { label: { autoHide: val } } });
      }